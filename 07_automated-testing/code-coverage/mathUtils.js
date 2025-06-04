function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

function isEven(num) {
    return num % 2 === 0;
}

module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    isEven
};