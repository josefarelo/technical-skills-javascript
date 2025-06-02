export function calcularArea(base, altura) {
    if (typeof base !== 'number' || typeof altura !== 'number') {
        throw new Error('Los parámetros deben ser números');
    }
    if (base <= 0 || altura <= 0) {
        throw new Error('Las medidas deben ser mayores a cero');
    }
  return base * altura;
}