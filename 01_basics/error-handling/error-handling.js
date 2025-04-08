// Función para verificar si un número es positivo
function checkPositiveNumber(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        throw new Error("El valor ingresado no es un número válido.");
    }
    if (n <= 0) {
        throw new Error("El número debe ser positivo.");
    }
    console.log("Número válido:", n);
}

const parent = document.getElementById('parent');
const button = document.getElementById('child-btn');
const input = document.getElementById('numberInput');

// Listener del padre
parent.addEventListener('click', () => {
    console.log("Se hizo clic en el contenedor padre.");
});

// Listener del botón hijo
button.addEventListener('click', (event) => {
    event.stopPropagation(); // Detiene que el evento llegue al padre
    console.log("Se hizo clic en el botón hijo.");

    const value = parseFloat(input.value);

    try {
        checkPositiveNumber(value);
        alert("Número correcto ");
    } catch (error) {
        alert("Error: " + error.message);
    } finally {
        console.log("Validación completada.");
    }
});
