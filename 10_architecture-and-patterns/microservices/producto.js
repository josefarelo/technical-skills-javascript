const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

// Datos de ejemplo
const productos = [
    { id: 10, nombre: 'Laptop', precio: 1200, stock: 15 },
    { id: 20, nombre: 'Mouse', precio: 25, stock: 50 }
];

// Obtener todos los productos
app.get('/productos', (req, res) => {
    try {
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});

// Obtener producto por ID
app.get('/productos/:id', (req, res) => {
    const producto = productos.find(p => p.id === parseInt(req.params.id));
    if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
});

// Endpoint adicional para buscar por nombre
app.get('/productos/buscar/:nombre', (req, res) => {
    const resultados = productos.filter(p => 
        p.nombre.toLowerCase().includes(req.params.nombre.toLowerCase())
    );
    res.status(200).json(resultados);
});

app.listen(PORT, () => {
    console.log(`Servicio de productos corriendo en http://localhost:${PORT}`);
});