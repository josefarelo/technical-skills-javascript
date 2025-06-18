// Esta es una función serverless simple que devuelve un saludo
module.exports.saludar = async (event) => {
    try {
        // Obtener el nombre de los parámetros de consulta o usar 'Mundo' por defecto
        const nombre = event.queryStringParameters?.nombre || 'Mundo';
        
        // Validar que el nombre no esté vacío
        if (nombre.trim() === '') {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'El nombre no puede estar vacío' })
            };
        }

        // Devolver respuesta exitosa
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' // Para CORS
            },
            body: JSON.stringify({ 
                mensaje: `Hola, ${nombre}!`,
                fecha: new Date().toISOString() // Agregamos fecha para hacerlo más completo
            })
        };

    } catch (error) {
        // Manejar errores inesperados
        console.error('Error en la función:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Ocurrió un error interno' })
        };
    }
};