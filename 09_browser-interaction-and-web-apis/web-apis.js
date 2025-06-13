// Guardar y recuperar datos del usuario en localStorage
function guardarUsuario() {
    try {
        localStorage.setItem('usuario', 'Jose');
        localStorage.setItem('preferencias', JSON.stringify({ tema: 'oscuro', notificaciones: true }));
        console.log('Datos guardados correctamente');
    } catch (error) {
        console.error('Error al guardar en localStorage:', error);
    }
}

function obtenerUsuario() {
    const nombre = localStorage.getItem('usuario');
    const preferencias = JSON.parse(localStorage.getItem('preferencias'));
    
    if (nombre) {
        console.log('Usuario recuperado:', nombre);
        console.log('Preferencias:', preferencias);
    } else {
        console.log('No hay datos de usuario guardados');
    }
}

// Ejecutar funciones de localStorage
guardarUsuario();
obtenerUsuario();

// Obtener y mostrar ubicación del usuario con Geolocation API
function obtenerUbicacion() {
    if (!navigator.geolocation) {
        console.error('Geolocation no está soportado en este navegador');
        return;
    }

    const opciones = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
        (position) => {
        console.log('Ubicación obtenida:');
        console.log(`Latitud: ${position.coords.latitude}`);
        console.log(`Longitud: ${position.coords.longitude}`);
        console.log(`Precisión: ${position.coords.accuracy} metros`);
        
        // Guardar en localStorage
        const ubicacion = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('ultimaUbicacion', JSON.stringify(ubicacion));
        },
        (error) => {
            console.error('Error al obtener ubicación:', error.message);
        },
        opciones
    );
}

// Verificar si ya hay una ubicación guardada
const ubicacionGuardada = localStorage.getItem('ultimaUbicacion');
if (ubicacionGuardada) {
    console.log('Última ubicación conocida:', JSON.parse(ubicacionGuardada));
    } else {
    console.log('No hay ubicación previa guardada');
}

// Intentar obtener nueva ubicación
console.log('Solicitando nueva ubicación...');
obtenerUbicacion();

// Ejemplo con sessionStorage
function manejarSesion() {
    sessionStorage.setItem('sesionActiva', 'true');
    sessionStorage.setItem('token', 'abc123xyz');
    
    console.log('Datos de sesión:');
    console.log('Sesión activa:', sessionStorage.getItem('sesionActiva'));
    console.log('Token:', sessionStorage.getItem('token'));
}

manejarSesion();