// Scope

function pruebaScope() {
    if (true) {
        var variableVar = "var dentro de un bloque";
        let variableLet = "let dentro de un bloque";
        const variableConst = "const dentro de un bloque";
    
        // Ejemplos dentro del bloque
        console.log(variableVar);   // 'var dentro de un bloque'
        console.log(variableLet);   // 'let dentro de un bloque'
        console.log(variableConst); // 'const dentro de un bloque'
    }
    
    // Ejemplos fuera del bloque
    console.log(variableVar);
    // console.log(variableLet);   // Error: variableLet is not defined
    // console.log(variableConst); // Error: variableConst is not defined
}

pruebaScope();



// Hoisting

// Hoisting con var
console.log(miVar); // undefined (hoisting: se eleva pero no el valor)
var miVar = "Hoisting con var";

// Hoisting con let
// console.log(miLet); // Error: Cannot access 'miLet' before initialization
let miLet = "Hoisting con let";

// Hoisting con const
// console.log(miConst); // Error: Cannot access 'miConst' before initialization
const miConst = "Hoisting con const";