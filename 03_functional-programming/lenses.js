// Función para crear un lens de una propiedad
const lens = (prop) => ({
    get: (obj) => obj[prop],
    set: (val, obj) => ({ ...obj, [prop]: val })
});

// Funciones para usar el lens
const get = (lens, obj) => lens.get(obj);
const set = (lens, val, obj) => lens.set(val, obj);

// Ejemplo
const persona = {
    nombre: 'Ana',
    edad: 30
};

// Crear lens
const nombreLens = lens('nombre');
const edadLens = lens('edad');

// Usar los lens
console.log(get(nombreLens, persona)); // 'Ana'

const personaActualizada = set(nombreLens, 'Juan', persona);
console.log(personaActualizada); // { nombre: 'Juan', edad: 30 }
console.log(persona); // { nombre: 'Ana', edad: 30 } (original no cambió)