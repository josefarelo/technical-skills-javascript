import { calcularArea } from './rectangle';

describe('Pruebas para calcularArea', () => {
    test('debería calcular el área correctamente con valores positivos', () => {
        const resultado = calcularArea(5, 10);
        expect(resultado).toBe(50);
    });

    test('debería lanzar error cuando los parámetros no son números', () => {
        expect(() => calcularArea('5', 10)).toThrow('Los parámetros deben ser números');
        expect(() => calcularArea(5, '10')).toThrow('Los parámetros deben ser números');
    });

    test('debería lanzar error cuando las medidas son cero o negativas', () => {
        expect(() => calcularArea(0, 10)).toThrow('Las medidas deben ser mayores a cero');
        expect(() => calcularArea(5, -2)).toThrow('Las medidas deben ser mayores a cero');
    });

    test('debería calcular correctamente con valores decimales', () => {
        const resultado = calcularArea(2.5, 3.5);
        expect(resultado).toBeCloseTo(8.75);
    });
});