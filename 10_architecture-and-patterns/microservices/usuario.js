const express = require('express');
const app = express();
const PORT = 3001;

// Middleware básico
app.use(express.json());

// Datos de ejemplo (simulando una base de datos)
const usuarios = [
    { id: 1, nombre: 'Ana', email: 'ana@example.com' },
    { id: 2, nombre: 'Luis', email: 'luis@example.com' }
];

// Endpoint para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    try {
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});

// Endpoint para obtener un usuario por ID
app.get('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
});

app.listen(PORT, () => {
    console.log(`Servicio de usuarios corriendo en http://localhost:${PORT}`);
});