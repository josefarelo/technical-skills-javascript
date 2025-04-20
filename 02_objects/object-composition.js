// Funciones de comportamiento (mixins)
function puedeHablar(obj) {
    return {
        ...obj,
        ablar() {
            return `${this.nombre} dice: "Hola, ¿cómo estas?"`;
        }
    };
}

function puedeComer(obj) {
    return {
        ...obj,
        comer() {
            return `${this.nombre} está comiendo.`;
        }
    };
}

function puedeDormir(obj) {
    return {
        ...obj,
        dormir() {
            return `${this.nombre} está trabajando duro.`;
        }
    };
}

// Composición de humano
function crearHumano(nombre) {
    // Estado base del humano
    let humano = { nombre };
    
    // Composición de comportamientos
    humano = puedeHablar(humano);
    humano = puedeComer(humano);
    humano = puedeDormir(humano);
    
    return Object.freeze(humano); // Previene modificaciones posteriores
}

// Ejemplos

const juan = crearHumano("Juan");

console.log(juan.hablar());    // Juan dice: "Hola, ¿cómo estas?"
console.log(juan.comer());     // Juan está comiendo.
console.log(juan.dormir());    // Juan está trabajando duro.
console.log("Modificar humano",(juan.edad = 30, juan.edad));  // Modificar humano undefined