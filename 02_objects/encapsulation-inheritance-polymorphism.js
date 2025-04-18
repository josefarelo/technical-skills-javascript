// Clase base Empleado
class Empleado {
    #nombre;
    #sueldoBase;
    
    constructor(nombre, sueldoBase) {
        this.#nombre = nombre;
        this.#sueldoBase = sueldoBase;
    }
    
    getNombre() {
        return this.#nombre;
    }
    
    getSueldoBase() {
        return this.#sueldoBase;
    }
    
    // Método base para calcular salario
    calcularSalario() {
        return this.#sueldoBase;
    }
}

// Clase hija Desarrollador
class Desarrollador extends Empleado {
    constructor(nombre, sueldoBase, horasExtras) {
        super(nombre, sueldoBase);
        this.horasExtras = horasExtras;
        this.bonoPorHora = 1000;
    }
    
    // Sobrescribir el método calcularSalario (polimorfismo)
    calcularSalario() {
        return this.getSueldoBase() + this.horasExtras * this.bonoPorHora;
    }
}

// Clase hija Diseñador
class Diseñador extends Empleado {
    constructor(nombre, sueldoBase, porcentajeComision) {
        super(nombre, sueldoBase);
        this.porcentajeComision = porcentajeComision;
    }
    
    calcularSalario() {
          return this.getSueldoBase() * (1 + this.porcentajeComision / 100);
    }
}

// Función que procesa distintos timpos de empleados
function mostrarSalarios(empleados) {
    for (const emp of empleados) {
        console.log(`${emp.getNombre()} cobra $${emp.calcularSalario().toFixed(2)}`);
    }
}

// Uso del sistema
const empleados = [
    new Desarrollador("José", 850000, 10),
    new Diseñador("Ana", 1150000, 15),
    new Empleado("Germán", 900000),
];

mostrarSalarios(empleados);
// José cobra $860000.00
// Ana cobra $1322500.00
// Germán cobra $900000.00