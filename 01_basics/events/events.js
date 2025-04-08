// Obtener los elementos
const abuelo = document.querySelector('.abuelo');
const padre = document.querySelector('.padre');
const hijo = document.querySelector('.hijo');
const boton = document.getElementById('myButton');

// Función para manejar clicks y mostrar información
function manejarClick(nombre) {
    return function (event) {
        console.log(`Click en ${nombre}`);
        console.log('event.target:', event.target);
        console.log('event.currentTarget:', event.currentTarget);
    
        // Cambiar el fondo del elemento actual
        event.currentTarget.style.backgroundColor = '#ffcccb';
    
        // Si estamos en el hijo, detenemos la propagación
        if (nombre === 'Hijo') {
            event.stopPropagation();
            console.log('Propagación detenida en el Hijo');
        }
    };
}

// Asignar eventos a cada nivel
abuelo.addEventListener('click', manejarClick('Abuelo'));
padre.addEventListener('click', manejarClick('Padre'));
hijo.addEventListener('click', manejarClick('Hijo'));

// Evento específico para el botón
boton.addEventListener('click', function (event) {
    event.stopPropagation(); // Detenemos también aquí por si acaso
    alert('¡Haz hecho click en el botón!');
});