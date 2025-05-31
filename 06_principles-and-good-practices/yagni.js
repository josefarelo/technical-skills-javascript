// Función original con validaciones innecesarias
function procesarDatosUsuario(usuario) {
  // Validación de nombre (necesaria)
    if (!usuario.nombre || usuario.nombre.trim() === '') {
        throw new Error('El nombre es requerido');
    }

    // Validación de email (necesaria)
    if (!usuario.email || !usuario.email.includes('@')) {
        throw new Error('Email inválido');
    }

    // Validación de edad (no necesaria aún)
    if (usuario.edad && (usuario.edad < 0 || usuario.edad > 120)) {
        throw new Error('Edad inválida');
    }

    // Validación de dirección (no necesaria aún)
    if (usuario.direccion && usuario.direccion.length > 100) {
        throw new Error('Dirección demasiado larga');
    }

    // Lógica principal
    const usuarioProcesado = {
        nombre: usuario.nombre.trim(),
        email: usuario.email.toLowerCase(),
        fechaRegistro: new Date().toISOString()
    };

    return usuarioProcesado;
}

// Función refactorizada aplicando YAGNI
function procesarDatosUsuario(usuario) {
    if (!usuario.nombre || usuario.nombre.trim() === '') {
        throw new Error('El nombre es requerido');
    }

    if (!usuario.email || !usuario.email.includes('@')) {
        throw new Error('Email inválido');
    }

    return {
        nombre: usuario.nombre.trim(),
        email: usuario.email.toLowerCase(),
        fechaRegistro: new Date().toISOString()
    };
}

// Ejemplo
try {
    const usuarioValido = {
        nombre: ' Juan Pérez ',
        email: 'JUAN@ejemplo.com'
    };
    
    const resultado = procesarDatosUsuario(usuarioValido);
    console.log('Usuario procesado:', resultado);
} catch (error) {
    console.error('Error:', error.message);
}