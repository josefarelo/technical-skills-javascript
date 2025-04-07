function crearContador(inicial) {
    let valor = inicial; // Variable recordada
    
    return {
        incrementar: function() {
            valor++;
        },
        decrementar: function() {
            valor--;
        },
        reiniciar: function() {
            valor = inicial;
        },
        obtenerValor: function() {
            return valor;
        }
    };
}

// Usamos el closure

const contadorA = crearContador(50);
const contadorB = crearContador(200);

contadorA.incrementar();
contadorA.incrementar();
console.log("ContadorA:", contadorA.obtenerValor()); // ContadorA: 52

contadorB.decrementar();
contadorB.decrementar();
contadorB.decrementar();
console.log("ContadorB:", contadorB.obtenerValor()); // ContadorB: 197

contadorA.reiniciar();
console.log("ContadorA reiniciado:", contadorA.obtenerValor()); // ContadorA reiniciado: 50