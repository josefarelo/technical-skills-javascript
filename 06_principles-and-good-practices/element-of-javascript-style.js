function calcularTotal(productos) {
    let total = 0;

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        
        if (producto.precio > 0 && producto.cantidad > 0) {
            const subtotal = producto.precio * producto.cantidad;
            total += subtotal;
        }
    }

    return total;
}

function mostrarResultado(total) {
    const contenedorResultado = document.getElementById('resultado');
    
    if (contenedorResultado) {
        contenedorResultado.textContent = `Total: $${total.toFixed(2)}`;
    }
}

function procesarPedido() {
    const productos = [
        { nombre: 'Camiseta', precio: 25.99, cantidad: 2 },
        { nombre: 'Pantalón', precio: 45.50, cantidad: 1 },
        { nombre: 'Zapatos', precio: 79.99, cantidad: 1 }
    ];

    const total = calcularTotal(productos);
    mostrarResultado(total);
}

document.addEventListener('DOMContentLoaded', function() {
    const botonCalcular = document.getElementById('calcular');

    if (botonCalcular) {
        botonCalcular.addEventListener('click', procesarPedido);
    }
});