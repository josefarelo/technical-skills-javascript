async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos obtenidos");
        }, 2000);
    });
}

async function main() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();