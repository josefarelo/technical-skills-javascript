const personas = [
    { nombre: 'Juan', edad: 25, ciudad: 'Madrid' },
    { nombre: 'Ana', edad: 17, ciudad: 'Barcelona' },
    { nombre: 'Carlos', edad: 30, ciudad: 'Sevilla' },
    { nombre: 'Lucía', edad: 15, ciudad: 'Valencia' },
    { nombre: 'Mario', edad: 20, ciudad: 'Bilbao' },
    { nombre: 'Sofía', edad: 22, ciudad: 'Madrid' },
    { nombre: 'Pedro', edad: 16, ciudad: 'Barcelona' }
];

// Extraer nombres en mayúsculas (map)
const nombresMayusculas = personas.map(persona => persona.nombre.toUpperCase());

// Filtrar mayores de edad y que vivan en Ciudades (filter)
const mayoresEnCiudades = personas.filter(persona => {
    return persona.edad >= 18 && (persona.ciudad === 'Madrid' || persona.ciudad === 'Barcelona');
});

// Calcular promedio de edad (reduce)
const totalEdades = personas.reduce((suma, persona) => suma + persona.edad, 0);
const promedioEdad = totalEdades / personas.length;

// Encontrar la persona más joven (reduce)
const personaMasJoven = personas.reduce((masJoven, actual) => {
    return actual.edad < masJoven.edad ? actual : masJoven;
});

// Crear un objeto con conteo por ciudad (reduce)
const conteoCiudades = personas.reduce((conteo, persona) => {
    conteo[persona.ciudad] = (conteo[persona.ciudad] || 0) + 1;
    return conteo;
}, {});

console.log('Nombres en mayúsculas:', nombresMayusculas);
console.log('Mayores en Madrid/Barcelona:', mayoresEnCiudades);
console.log('Promedio de edad:', promedioEdad.toFixed(2));
console.log('Persona más joven:', personaMasJoven);
console.log('Conteo por ciudad:', conteoCiudades);