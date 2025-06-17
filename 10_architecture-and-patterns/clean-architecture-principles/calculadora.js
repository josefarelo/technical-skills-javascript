class Calculadora {
    sumar(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Los parámetros deben ser números');
        }
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return a / b;
    }
}

module.exports = Calculadora;