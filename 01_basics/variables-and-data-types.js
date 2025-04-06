// Declarar variables con distintos tipos primitivos
var texto = "Texto";        // string
let numero = 1234;          // number
const esBooleano = true;    // boolean
let valorNulo = null;       // null
let sinDefinir;             // undefined
let idUnico = Symbol("id"); // symbol

// Mostrar variables en consola
console.log(texto, numero, esBooleano, valorNulo, sinDefinir, idUnico);

// Objeto con propiedades de distintos tipos
const perro = {
    raza: "Husky siberiano", // string
    edad: 1,                 // number
    vacunado: true,          // boolean
    dueño: null,             // null
    nombre: undefined,       // undefined
    id: Symbol("mascotaID")  // symbol
};

// Mostar objeto en consola
console.log(perro);