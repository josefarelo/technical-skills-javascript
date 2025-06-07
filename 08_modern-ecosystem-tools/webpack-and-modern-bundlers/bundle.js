console.log('¡Webpack funcionando!');

// Importamos un módulo simple para demostrar el bundling
import { sumar } from './math.js';

const resultado = sumar(5, 3);
console.log(`El resultado de la suma es: ${resultado}`);

// Agregamos un manejador de eventos básico para mostrar interacción
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.createElement('button');
    boton.textContent = 'Haz click';
    boton.style.margin = '20px';
    boton.style.padding = '10px';
    
    boton.addEventListener('click', function() {
        alert('¡Botón clickeado! Webpack está funcionando bien.');
    });
    
    document.body.appendChild(boton);
});