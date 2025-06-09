function mostrarMensaje() {
    const parrafo = document.getElementById('mensaje');
    if (parrafo) {
        parrafo.textContent = '¡Hola desde JavaScript!';
    } else {
        console.error('No se encontró el elemento con ID "mensaje"');
    }
}

function cambiarColor() {
    const parrafo = document.getElementById('mensaje');
    if (parrafo && parrafo.textContent) {
        const colores = ['red', 'blue', 'green', 'purple', 'orange'];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        parrafo.style.color = colorAleatorio;
    } else {
        alert('Primero haz clic en "Mostrar mensaje"');
    }
}

function agrandarTexto() {
    const parrafo = document.getElementById('mensaje');
    if (parrafo && parrafo.textContent) {
        let tamañoActual = parseInt(window.getComputedStyle(parrafo).fontSize) || 16;
        parrafo.style.fontSize = (tamañoActual + 2) + 'px';
    } else {
        alert('Primero haz clic en "Mostrar mensaje"');
    }
}

// Añadir mensaje al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('La página ha terminado de cargar!');
    // Mostrar un mensaje por defecto
    document.getElementById('mensaje').textContent = 'Bienvenido!';
});