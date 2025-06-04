const { sum, subtract, multiply, divide, isEven } = require('./mathUtils');

describe('Math Utilities', () => {
    test('sum adds two numbers correctly', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(-1, 5)).toBe(4);
    });

    test('subtract subtracts two numbers correctly', () => {
        expect(subtract(5, 2)).toBe(3);
        expect(subtract(10, 10)).toBe(0);
    });

    test('multiply multiplies two numbers correctly', () => {
        expect(multiply(3, 4)).toBe(12);
        expect(multiply(-2, 5)).toBe(-10);
    });

    test('divide divides two numbers correctly', () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(9, 3)).toBe(3);
    });

    test('divide throws error when dividing by zero', () => {
        expect(() => divide(5, 0)).toThrow("No se puede dividir por cero");
    });

    test('isEven checks if number is even', () => {
        expect(isEven(4)).toBe(true);
        expect(isEven(7)).toBe(false);
        expect(isEven(0)).toBe(true);
    });
});