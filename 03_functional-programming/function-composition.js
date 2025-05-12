// Función que combina dos funciones para crear una nueva función compuesta
function compose(f, g) {
    // Validar que los argumentos sean funciones
    if (typeof f !== 'function' || typeof g !== 'function') {
        throw new Error('Ambos argumentos deben ser funciones');
    }

    // Devolver la función compuesta
    return function(x) {
        // Primero aplicar g al input
        const resultadoIntermedio = g(x);
        
        // Luego aplicar f al resultado intermedio
        const resultadoFinal = f(resultadoIntermedio);
        
        return resultadoFinal;
    };
}

// Ejemplos prácticos de uso
function sumarCinco(num) {
    return num + 5;
}

function duplicar(num) {
  return num * 2;
}

// Crear función compuesta
const procesarNumero = compose(duplicar, sumarCinco);

// Probar la función
console.log(procesarNumero(10)); // (10 + 5) * 2 = 30
console.log(procesarNumero(3));  // (3 + 5) * 2 = 16

// Versión extendida que acepta múltiples funciones
function composeMultiple(...funcs) {
    // Verificar que todas sean funciones
    for (const func of funcs) {
            if (typeof func !== 'function') {
            throw new Error('Todos los argumentos deben ser funciones');
        }
    }

return function(x) {
    let resultado = x;
    // Aplicar las funciones de derecha a izquierda
    for (let i = funcs.length - 1; i >= 0; i--) {
        resultado = funcs[i](resultado);
    }
    return resultado;
    };
}

// Ejemplo con múltiples funciones
const calcularTotal = composeMultiple(
    x => x * 1.16,  // Agregar IVA
    x => x - 5,     // Restar descuento
    x => x + 10     // Sumar envío
);

console.log(calcularTotal(100)); // (((100 + 10) - 5) * 1.16) = 121.8