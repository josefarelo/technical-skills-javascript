// Definir objetos user y admin
const user = {
    name: "Juan",
    lastname: "Pérez",
    age: 30,
    email: "juan.perez@ejemplo.com"
};

const admin = {
    name: "María",
    lastname: "Gómez",
    age: 25,
    email: "maria.gomez@ejemplo.com",
    role: "Administrator"
};

// Versión original con código
console.log("Versión original:");
console.log(user.name + " " + user.lastname);
console.log(admin.name + " " + admin.lastname);

// Función mejorada para mostrar nombre completo
function printFullName(person) {
    if (!person || typeof person !== 'object') {
        console.error("Error: Se esperaba un objeto persona");
        return;
    }

    if (!person.name || !person.lastname) {
        console.warn("Advertencia: El objeto no tiene las propiedades name o lastname");
        return;
    }

    console.log(`${person.name} ${person.lastname}`);
}

// Versión refactorizada
console.log("\nVersión refactorizada:");
printFullName(user);
printFullName(admin);

// Casos adicionales
console.log("\nPruebas adicionales:");
printFullName({name: "Carlos"}); // Advertencia
printFullName(null); // Error
printFullName("no es un objeto"); // Error

// Función adicional para mostrar toda la info de la persona
function printPersonInfo(person) {
    console.log("\nInformación completa:");
    console.log(`Nombre completo: ${person.name} ${person.lastname}`);
    console.log(`Edad: ${person.age}`);
    console.log(`Email: ${person.email}`);
    if (person.role) {
        console.log(`Rol: ${person.role}`);
    }
}

// Mostrando información completa
printPersonInfo(user);
printPersonInfo(admin);