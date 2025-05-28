const promesa = new Promise((resolve, reject) => {
    console.log("Estado inicial: pendiente");
    
    const valorAleatorio = Math.random();
    
    setTimeout(() => {
        if (valorAleatorio > 0.5) {
            resolve("¡Éxito! Valor: " + valorAleatorio);
        } else {
            reject("¡Fallo! Valor: " + valorAleatorio);
        }
    }, 1000);
});

promesa
    .then((resultado) => {
        console.log("Estado: cumplida", resultado);
    })
    .catch((error) => {
        console.log("Estado: rechazada", error);
    });