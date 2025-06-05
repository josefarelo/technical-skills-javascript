const _ = require('lodash');

function saludar() {
    const texto = 'hola mundo de la programación';
    const textoCapitalizado = _.capitalize(texto);
    console.log(textoCapitalizado);

    // Usando otra función de lodash por si acaso
    const numeros = [1, 2, 3, 4, 5];
    const suma = _.sum(numeros);
    console.log(`La suma de los números es: ${suma}`);
}

saludar();


function despedirse() {
    console.log('Adiós!');
}

despedirse();