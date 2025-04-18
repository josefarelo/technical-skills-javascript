// Clase base Vehículo
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    
    info() {
        console.log(`Vehículo: ${this.marca} ${this.modelo}`);
    }
}

// Subclase Moto que hereda el constructor de Vehículo
class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }
    // Sobrescribir el método info
    info() {
        console.log(`Moto: ${this.marca} ${this.modelo} - ${this.cilindrada}cc`);
    }

    //Método Estático para comparar cilindradas entre dos motos
    static compararCilindradas(moto1, moto2) {
        if (!(moto1 instanceof Moto) || !(moto2 instanceof Moto)) {
            console.log("Ambos objetos deben ser instancias de Moto");
            return;
        }
        
        if (moto1.cilindrada > moto2.cilindrada) {
            console.log(`${moto1.modelo} tiene una mayor cilindrada que ${moto2.modelo}.`);
        } else if (moto1.cilindrada < moto2.cilindrada) {
            console.log(`${moto1.modelo} tiene una menor cilindrada que ${moto2.modelo}.`);
        } else {
            console.log(`${moto1.modelo} tienen la misma cilindrada ${moto2.modelo}.`);
        }
    }
}

const vehiculo1 = new Vehiculo("Toyota", "Hilux");
const moto1 = new Moto("Yamaha", "FZ", 150);
const moto2 = new Moto("Honda", "CBR", 250);

vehiculo1.info(); // Vehículo: Toyota Hilux
moto1.info(); // Moto: Yamaha FZ - 150cc
moto2.info(); // Moto: Honda CBR - 250cc
Moto.compararCilindradas(moto1, moto2); // FZ tiene una menor cilindrada que CBR.
