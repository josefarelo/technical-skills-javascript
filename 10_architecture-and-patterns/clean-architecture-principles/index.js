const operarSuma = require('./usecases/operarSuma');
const Consola = require('./infrastructure/consola');

function main() {
    try {
        const resultado = operarSuma(5, 3);
        Consola.log(`El resultado de la suma es: ${resultado}`);
        
        // Ejemplo adicional para mostrar otras operaciones
        const calc = new (require('./domain/calculadora'))();
        Consola.log(`Restando: ${calc.restar(10, 2)}`);
        Consola.log(`Multiplicando: ${calc.multiplicar(3, 4)}`);
        Consola.log(`Dividiendo: ${calc.dividir(10, 2)}`);
        
    } catch (error) {
        Consola.error(`Ocurrió un error: ${error.message}`);
    }
}

main();