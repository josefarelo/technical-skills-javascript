// Versión original
function esPar(numero) {
    const resultado = numero % 2 === 0;
    if (resultado === true) {
        return true;
    } else {
        return false;
    }
}

// Versión refactorizada
function esParSimple(numero) {
    return numero % 2 === 0;
}

// Ejemplos
console.log('¿5 es par?', esPar(5)); // false
console.log('¿10 es par?', esParSimple(10)); // true

// Bonus, versión arrow function (aún más simple)
const esParArrow = num => num % 2 === 0;
console.log('¿8 es par?', esParArrow(8)); // true

// Mejora adicional, manejo básico de no-números
function esParSeguro(numero) {
    if (typeof numero !== 'number') return false;
    return numero % 2 === 0;
}

console.log('¿"hola" es par?', esParSeguro('hola')); // false