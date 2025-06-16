const axios = require('axios');
const fs = require('fs');

// Hacer una petición HTTP
async function getPost() {
    try {
        console.log('Haciendo petición a la API...');
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        
        // Mostrar datos en consola
        console.log('Datos recibidos:', response.data);
        
        // Guardar en un archivo
        fs.writeFile('post-data.json', JSON.stringify(response.data, null, 2), (err) => {
            if (err) {
                console.error('Error al guardar el archivo:', err);
            } else {
                console.log('Datos guardados en post-data.json');
            }
        });
        
        return response.data;
    } catch (error) {
        console.error('Error al obtener el post:', error.message);
        throw error;
    }
}

// Ejecutar la función
getPost()
    .then(data => console.log('Proceso completado!'))
    .catch(err => console.error('Algo salió mal:', err));