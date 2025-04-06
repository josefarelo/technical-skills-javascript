// Función tradicional
function sumar(a, b) {
    return a + b;
}

// Función flecha
const restar = (a, b) => a - b;

const dividir = (a, b) => {
    if (b === 0) {
        return "Error: No se puede dividir por cero.";
    }
    return a / b;
};

// Función anónima
const multiplicar = function(a, b) {
    return a * b;
};

// Función callback
    function calcular(a, b, operacion) {
    return operacion(a, b);
}

// función que retorna otra función
function calculadoraBasica() {
    return function (a, b) {
        return {
        suma: sumar(a, b),
        resta: restar(a, b),
        multiplicacion: multiplicar(a, b),
        division: dividir(a, b)
        };
    }
}

// Ejemplos

// Funciones directamente
console.log("Suma:", sumar(5, 3));                  // 'Suma:' 8
console.log("Resta:", restar(5, 3));                // 'Resta:' 2
console.log("Multiplicación:", multiplicar(5, 3));  // 'Multiplicación:' 15
console.log("División:", dividir(6, 3));            // 'División:' 2

// Callbacks
console.log("Resultado:", calcular(10, 2, sumar));        // 'Resultado:' 12
console.log("Resultado:", calcular(10, 2, restar));       // 'Resultado:' 8    
console.log("Resultado:", calcular(10, 2, multiplicar));  // 'Resultado:' 20
console.log("Resultado:", calcular(10, 2, dividir));      // 'Resultado:' 5

//Función que retorna función
const calculadora = calculadoraBasica();
const resultado = calculadora(7, 7);
console.log("Resultado:", resultado);  /*   'Resultado:' {
                                                suma: 14,
                                                resta: 0,
                                                multiplicacion: 49,
                                                division: 1
                                            }   */

// Error
console.log("División por cero:", dividir(5, 0));   // 'División por cero:' 'Error: No se puede dividir por cero.'