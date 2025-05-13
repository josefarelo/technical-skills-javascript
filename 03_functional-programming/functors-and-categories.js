function Box(value) {
    // Verificamos que no se use con 'new'
    if (this instanceof Box) {
        throw new Error('Usa Box sin "new": Box(valor)');
    }

    // Creamos el objeto con los métodos
    const box = {
        // Transforma el valor con una función
        map: function(fn) {
            if (typeof fn !== 'function') {
                throw new Error('map necesita una función');
            }
            return Box(fn(value));
        },

        // Extrae el valor aplicando una función
        fold: function(fn) {
            if (typeof fn !== 'function') {
                throw new Error('fold necesita una función');
            }
            return fn(value);
        },

        // Para ver el contenido al hacer console.log
        inspect: function() {
            return `Box(${value})`;
        }
    };

    // Hacemos que el valor no sea modificable
    Object.defineProperty(box, 'value', {
        value: value,
        writable: false,
        enumerable: false
    });

    return box;
}

// Ejemplo
const resultado = Box(3)
.map(x => x + 2)    // 3 + 2 = 5
.map(x => x * 3)    // 5 * 3 = 15
.fold(x => x);      // Extrae el 15

console.log(resultado); // Muestra 15