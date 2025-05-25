function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Datos obtenidos con éxito");
            } else {
                reject("Error al obtener los datos");
            }
        }, 1000);
    });
}

fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
    .finally(() => console.log("Operación finalizada"));