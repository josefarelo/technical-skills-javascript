// Objeto con métodos que usa this
const producto = {
    nombre: "Milanesa de pollo",
    precio: 9300,
    stock: 60,
    
    // Método tradicional que usa bien 'this'
    mostrarInfo: function() {
        console.log(`Producto: ${this.nombre} | Precio: $${this.precio}/Kg | Stock: ${this.stock}Kg`)
    },
        
    // Método con función flecha (no funciona porque 'this' no apunta al objeto, sino al contexto externo)
    mostrarInfoFlecha: () => {
        console.log(`(Flecha) Producto: ${this.nombre || "No disponible"}`);
    },
        
    // Método que simula una actualización con retraso
    actualizarStock: function() {
        console.log("\n Iniciando actualización de stock...")
        
        // Función tradicional (se pierde el 'this')
        setTimeout(function () {
            console.log(`Producto: ${this.nombre || "Desconocido"}`);
            console.log(`Stock: ${this.stock || "¿?"}Kg`);
        }, 1000);
        
        // SOLUCIONES //
        
        // Solución 1 - Usar .bind() para forzar el 'this'
        setTimeout(function () {
            console.log("Solución 1 con .bind(this):");
            console.log(`Producto: ${this.nombre}`);
            console.log(`Stock actual: ${this.stock}Kg`);
        }.bind(this), 2000);
        
        // Solución 2 - Usar función flecha que herede el 'this'
        setTimeout(() => {
            console.log("Solución 2 con función flecha:");
            console.log(`Producto: ${this.nombre}`);
            this.stock -= 10; // Restamos 10 al stock
            console.log(`Stock actualizado: ${this.stock}Kg`);
        }, 3000);
    }
};

// Llamado directo al método - Usa correctamente this
producto.mostrarInfo();  // Producto: Milanesa de pollo | Precio: $9300/Kg | Stock: 60Kg

// Método extraido y guardado en otra variable - No funciona, se pierde el 'this'
const infoPerdida = producto.mostrarInfo;
infoPerdida();  // Producto: undefined | Precio: $undefined/Kg | Stock: undefinedKg

// Corregido con .bind() - Muestra correctamente los datos
const infoCorregida = producto.mostrarInfo.bind(producto);
infoCorregida();  // Producto: Milanesa de pollo | Precio: $9300/Kg | Stock: 60Kg

// Usamos .call() y .apply() con otros objetos
producto.mostrarInfo.call({ // Producto: Milanesa de carne | Precio: $10500/Kg | Stock: 45Kg
    nombre: "Milanesa de carne",
    precio: 10500,
    stock: 45,
}); // call pasa el nuevo 'this'

producto.mostrarInfo.apply({ // Producto: Milanesa de cerdo | Precio: $8100/Kg | Stock: 73Kg
    nombre: "Milanesa de cerdo",
    precio: 8100,
    stock: 73,
}); // apply hace lo mismo, con los argumentos como array

// Método que usa setTimeout para mostrar varios casos - Muestra pérdida y correcciones de this
producto.actualizarStock();  /*
                                Iniciando actualización de stock...
                                Producto: Desconocido
                                Stock: ¿?Kg
                                Solución 1 con .bind(this):
                                Producto: Milanesa de pollo/Kg
                                Stock actual: 60Kg
                                Solución 2 con función flecha:
                                Producto: Milanesa de pollo
                                Stock actualizado: 50Kg
                            */

// Método con función flecha - No muestra la información porque no hereda bien el 'this'
producto.mostrarInfoFlecha(); // (Flecha) Producto: No disponible

