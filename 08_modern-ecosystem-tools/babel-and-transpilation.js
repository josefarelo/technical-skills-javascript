const saludar = () => {
    console.log('Hola desde ES6+');
    console.log('Este código será transpilado con Babel');
    
    // Ejemplo de características modernas
    const numeros = [1, 2, 3, 4];
    const cuadrados = numeros.map(n => n * n);
    console.log('Cuadrados:', cuadrados);
    
    // Objeto con propiedades abreviadas
    const nombre = 'Juan';
    const edad = 30;
    const persona = { nombre, edad };
    console.log('Persona:', persona);
    
    // Operador de propagación
    const masNumeros = [...numeros, 5, 6];
    console.log('Más números:', masNumeros);
};

saludar();

// Clase simple con ES6
class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    decirHola() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const usuario1 = new Usuario('Carlos');
usuario1.decirHola();

// Async/Await de ejemplo
async function obtenerDatos() {
    try {
        const respuesta = await fetch('https://api.example.com/data');
        const datos = await respuesta.json();
        console.log('Datos obtenidos:', datos);
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}