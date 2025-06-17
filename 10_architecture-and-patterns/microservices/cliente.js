const axios = require('axios');

async function obtenerDatos() {
    try {
        // Consumir servicio de usuarios
        const respuestaUsuario = await axios.get('http://localhost:3001/usuarios/1');
        console.log('Datos del usuario:', respuestaUsuario.data);

        // Consumir servicio de productos
        const respuestaProducto = await axios.get('http://localhost:3002/productos/10');
        console.log('Datos del producto:', respuestaProducto.data);

        // Ejemplo de búsqueda
        const busqueda = await axios.get('http://localhost:3002/productos/buscar/lap');
        console.log('Resultados de búsqueda:', busqueda.data);
    } catch (error) {
        console.error('Error al obtener datos:', error.message);
    }
}

obtenerDatos();