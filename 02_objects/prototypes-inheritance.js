// Constructor Animal
function Animal(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
}

// Método común para todos los animales
Animal.prototype.hacerSonido = function() {
    console.log(`${this.nombre} hace un sonido genérico.`);
};

// Constructor Perro que hereda de Animal
function Perro(nombre, tipo, raza) {
    // Llamar al constuctor animal para usar en Perro
    Animal.call(this, nombre, tipo);
    this.raza = raza;
}

// Heredar el prototipo Animal
Perro.prototype = Object.create(Animal.prototype);
// Corregir el constructor
Perro.prototype.constructor = Perro;

// Sobrescribir el método hacerSonido
Perro.prototype.hacerSonido = function() {
    console.log(`Guau! Soy ${this.nombre}, un ${this.tipo} de raza ${this.raza}`);
};


const animal1 = new Animal("Pájaro", "Ave");
const perro1 = new Perro("Max", "Mamífero", "Pastor Alemán");

console.log("Sonido del animal genérico: ");
animal1.hacerSonido();

console.log("Sonido del perro: ");
perro1.hacerSonido();

console.log("👉 Verificación de herencia:");
console.log(perro1 instanceof Perro);   // true
console.log(perro1 instanceof Animal);  // true
console.log(animal1 instanceof Perro);  // false