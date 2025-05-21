// Función recursiva para calcular el factorial con validación y mensajes
function calcularFactorial(numero) {
    // Validamos que el input sea correcto
    if (typeof numero !== 'number' || !Number.isInteger(numero) || numero < 0) {
        console.error("Error: Debes ingresar un número entero positivo.");
        return null;
    }

    // Caso base: factorial de 0 o 1 es 1
    if (numero === 0 || numero === 1) {
        console.log(`Llegamos al caso base: factorial(${numero}) = 1`);
        return 1;
    }

    // Caso recursivo
    console.log(`Calculando factorial(${numero}) = ${numero} * factorial(${numero - 1})`);
    const resultado = numero * calcularFactorial(numero - 1);  // Error intencional para probar
    console.log(`Resultado parcial: factorial(${numero}) = ${resultado}`);
    return resultado;
}

// Función recursiva para recorrer array inverso con más detalles
function recorrerArrayInverso(array, indice = array.length - 1) {
    // Validación del array
    if (!Array.isArray(array)) {
        console.error("Error: El primer argumento debe ser un array.");
        return;
    }

    // Caso base: terminar cuando el índice es negativo
    if (indice < 0) {
        console.log("Fin del recorrido (caso base alcanzado)");
        return;
    }

    // Caso recursivo
    console.log(`Elemento en posición ${indice}: ${array[indice]}`);
    recorrerArrayInverso(array, indice - 1);

    // Podemos hacer algo después de la llamada recursiva
    if (indice === array.length - 1) {
        console.log("Recorrido completo!");
    }
}

// Ejemplos de uso con más contexto
console.log("=== Prueba de Factorial ===");
const numeroParaFactorial = 5;
console.log(`Calculando factorial de ${numeroParaFactorial}...`);
const resultadoFactorial = calcularFactorial(numeroParaFactorial);
console.log(`El factorial de ${numeroParaFactorial} es: ${resultadoFactorial}`);

console.log("\n=== Prueba de Recorrido Inverso ===");
const miArray = [10, 20, 30, 40, 50];
console.log(`Recorriendo el array [${miArray}] en orden inverso:`);
recorrerArrayInverso(miArray);

// Caso de prueba con error
console.log("\n=== Prueba con Error ===");
calcularFactorial(-3);