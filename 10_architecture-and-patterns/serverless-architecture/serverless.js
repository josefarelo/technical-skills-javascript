module.exports = {
    service: 'mi-servicio-serverless',
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        region: 'us-east-1'
    },
    functions: {
        saludar: {
            handler: 'handler.saludar',
            events: [
                {
                    http: {
                        path: 'saludar',
                        method: 'get',
                        cors: true
                    }
                }
            ]
        }
    }
};


// Ejemplo de event para probar localmente

const testEvent = {
    queryStringParameters: {
        nombre: 'Juan'
    }
};

module.exports.saludar(testEvent).then(console.log);