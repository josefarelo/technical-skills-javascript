// Obtener un post y mostrarlo en la consola
function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response) {
        return response.json();
    })
    .then(function(post) {
        console.log('El post es:', post);
        console.log('Titulo:', post.title);
        console.log('Cuerpo:', post.body);
    })
    .catch(function(error) {
        console.log('Hubo un error:', error);
    });
}

// Llamar a la función cuando se carga la página
window.onload = function() {
    console.log('La página cargó!');
    getPost();
    
    // Botón para probar de nuevo
    document.getElementById('reload-btn').onclick = function() {
        console.log('Recargando datos...');
        getPost();
    };
};