// Array de nombres con operaciones avanzadas
let nombres = ['Ana', 'Carlos', 'Diana', 'Eduardo'];

// Agregar varios elementos al final
nombres.push('Fernando', 'Gabriela');

// Eliminar el segundo elemento (Carlos)
let eliminado = nombres.splice(1, 1);
console.log(`Se eliminó: ${eliminado}`);

// Buscar con find (primer nombre con más de 5 letras)
let nombreLargo = nombres.find(nombre => nombre.length > 5);
console.log(`Primer nombre largo: ${nombreLargo}`);

// Filtrar nombres que empiezan con vocal
let vocales = ['A', 'E', 'I', 'O', 'U'];
let nombresConVocal = nombres.filter(nombre => 
    vocales.includes(nombre.charAt(0).toUpperCase())
);
console.log('Nombres que empiezan con vocal:', nombresConVocal);

// Objeto usuario con métodos
let usuario = {
    nombre: 'Juan',
    edad: 30,
    email: 'juan@example.com',
    activo: true,
    
    // Método para actualizar email
    actualizarEmail: function(nuevoEmail) {
        this.email = nuevoEmail;
        console.log(`Email actualizado a: ${this.email}`);
    },
    
    // Método para mostrar info
    mostrarInfo: function() {
        return `${this.nombre} (${this.edad} años) - ${this.email}`;
    }
};

// Usar métodos del objeto
usuario.actualizarEmail('juan.nuevo@mail.com');
console.log(usuario.mostrarInfo());

// Agregar nueva propiedad dinámicamente
usuario['direccion'] = 'Calle 123';
console.log('Dirección añadida:', usuario.direccion);

// Set con operaciones avanzadas
let numerosUnicos = new Set([1, 2, 3, 4, 4, 5, 5]);

// Convertir Set a Array
let arrayDeNumeros = [...numerosUnicos];
console.log('Set convertido a array:', arrayDeNumeros);

// Eliminar números pares
numerosUnicos.forEach(num => {
    if(num % 2 === 0) numerosUnicos.delete(num);
});
console.log('Set sin pares:', [...numerosUnicos]);

// Map con diferentes tipos de claves
let mapaDatos = new Map();

// Usar objetos como claves
let claveObjeto = { id: 101 };
mapaDatos.set(claveObjeto, 'Datos del usuario 101');

// Usar funciones como valores
mapaDatos.set('funcionSuma', (a, b) => a + b);

// Recorrer el Map
console.log('Recorriendo el Map:');
mapaDatos.forEach((valor, clave) => {
    console.log(`Clave: ${clave} -> Valor: ${valor}`);
});

// Ejecutar función almacenada en el Map
if(mapaDatos.has('funcionSuma')) {
    let suma = mapaDatos.get('funcionSuma');
    console.log('Resultado de suma:', suma(5, 3));
}