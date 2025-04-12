// Crear el objeto
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Marquez",
    anioPublicacion: 1967,
    resumen() {
        return `El libro ${this.titulo} fue escrito por ${this.autor} en el año ${this.anioPublicacion}.`; 
    }
};

console.log("Resumen inicial");
console.log(libro.resumen);


// Agregar propiedades dinámicas
libro['genero'] = ["Novela", "Ficción", "Saga familiar"];
libro.calificacion = [4.5, 5, 4.25, 4, 5, 3.75];

// Eliminar propiedad
delete libro.anioPublicacion;

// Agregar un método que calcule el promedio de calificación
libro.promedioCalificacion = function() {
    if (!this.calificacion || this.calificacion.length === 0) return 0;
    const suma = this.calificacion.reduce((acc, val) => acc + val, 0);
    return (suma / this.calificacion.length).toFixed(2);
};

console.log("\nPromedio de calificación");
console.log(libro.promedioCalificacion);


// Función para mostrar propiedades (ignorando métodos)
function mostrarPropiedades(obj) {
    console.log("\nPropiedades del libro");
    for (let clave in obj) {
        if (typeof obj[clave] !== 'function') {
            console.log(`${clave}: ${obj[clave]}`);
        }
    }
}

mostrarPropiedades(libro);