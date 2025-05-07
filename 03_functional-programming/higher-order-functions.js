function applyTwice(fn, value) {
    const firstResult = fn(value);
    const secondResult = fn(firstResult);
    return secondResult;
}

// Ejemplo
const double = x => x * 2;
console.log(applyTwice(double, 5)); // 20 (5 * 2 = 10, luego 10 * 2 = 20)

const square = x => x * x;
console.log(applyTwice(square, 3)); // 81 (3² = 9, luego 9² = 81)