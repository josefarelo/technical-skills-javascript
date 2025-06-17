const Calculadora = require('../calculadora');

function operarSuma(a, b) {
    try {
        const calc = new Calculadora();
        const resultado = calc.sumar(a, b);
        return resultado;
    } catch (error) {
        console.error('Error en operarSuma:', error.message);
        throw error;
    }
}

module.exports = operarSuma;