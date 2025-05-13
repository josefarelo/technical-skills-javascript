class Maybe {
    constructor(value) {
        this._value = value;
    }

    static of(value) {
        return new Maybe(value);
    }

    static nothing() {
        return new Maybe(null);
    }

    get value() {
        return this._value;
    }

    isNothing() {
        return this._value === null || this._value === undefined;
    }

    map(fn) {
        if (this.isNothing()) {
            return Maybe.nothing();
        }
        try {
            const result = fn(this._value);
            return Maybe.of(result);
        } catch (error) {
            return Maybe.nothing();
        }
    }

    flatMap(fn) {
        if (this.isNothing()) {
            return Maybe.nothing();
        }
        try {
            const result = fn(this._value);
            return result instanceof Maybe ? result : Maybe.of(result);
        } catch (error) {
            return Maybe.nothing();
        }
    }

    getOrElse(defaultValue) {
        return this.isNothing() ? defaultValue : this._value;
    }

    toString() {
        return this.isNothing() ? 'Maybe.Nothing' : `Maybe(${this._value})`;
    }
}

// Ejemplo de uso:
const safeDivide = (a, b) => (b === 0 ? Maybe.nothing() : Maybe.of(a / b));

const computation = Maybe.of(10)
    .map(x => x + 5) // 15
    .flatMap(x => safeDivide(x, 3)) // Maybe(5)
    .map(x => x * 4) // Maybe(20)
    .flatMap(x => Maybe.nothing()) // Simula un error
    .map(x => x + 2) // Se salta porque es Nothing
    .getOrElse(0); // Retorna 0 por el fallo anterior

console.log(computation); // 0

const successfulComputation = Maybe.of(8)
    .flatMap(x => safeDivide(x, 2)) // Maybe(4)
    .map(x => x * 10) // Maybe(40)
    .getOrElse(0);

console.log(successfulComputation); // 40