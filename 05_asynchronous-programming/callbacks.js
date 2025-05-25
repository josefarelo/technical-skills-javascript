// Simulación de lectura de archivo con callback
function leerArchivo(nombreArchivo, callback) {
    console.log(`Leyendo archivo: ${nombreArchivo}...`);
    
    // Simular operación asíncrona con setTimeout
    setTimeout(() => {
        const contenido = `Contenido del archivo ${nombreArchivo}`;
        callback(null, contenido); // Primer parámetro es error (null en este caso)
    }, 2000);
}

// Uso de la función con callback
leerArchivo('mi_archivo.txt', (error, contenido) => {
    if (error) {
        console.error('Error al leer archivo:', error);
    } else {
        console.log('Contenido leído:', contenido);
    }
});