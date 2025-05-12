// Función curry para transformar una función normal en currificada
const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
};

// Función original que toma múltiples argumentos
const multiply = (a, b, c) => a * b * c;

// Versión currificada de la función multiply
const curriedMultiply = curry(multiply);

// Ejemplos
console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24
console.log(curriedMultiply(2, 3, 4)); // 24

// También se puede reutilizar parcialmente:
const multiplyByTwo = curriedMultiply(2);
console.log(multiplyByTwo(3)(5)); // 30