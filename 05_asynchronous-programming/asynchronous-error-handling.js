async function fetchData() {
    // Simulamos una operación asíncrona que puede fallar
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
        return "Datos obtenidos con éxito";
    } else {
        throw new Error("Error al obtener los datos");
    }
}

async function main() {
    try {
        console.log("Iniciando operación asíncrona...");
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Ocurrió un error:", error.message);
    } finally {
        console.log("Operación finalizada (éxito o fallo)");
    }
}

main();