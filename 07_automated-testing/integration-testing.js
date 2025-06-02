// test de la base de datos
const testDB = {
    save: jest.fn((usuario) => {
        console.log('Usuario guardado en la DB test:', usuario);
        return true;
    }),
    find: jest.fn((email) => {
        console.log('Buscando usuario en la DB test con email:', email);
        return { email, nombre: 'Usuario de prueba' };
    })
};

// Función a probar
function guardarUsuario(db, usuario) {
    db.save(usuario);
    return db.find(usuario.email);
}

// Prueba de integración
describe('Prueba de integración para guardarUsuario', () => {
    it('debería llamar a save() y luego a find() con los datos correctos', () => {
            const usuarioTest = {
            email: 'test@example.com',
            nombre: 'Test User',
            edad: 25
        };

        // Ejecutar la función
        const resultado = guardarUsuario(testDB, usuarioTest);

        // Verificaciones
        expect(testDB.save).toHaveBeenCalledTimes(1);
        expect(testDB.save).toHaveBeenCalledWith(usuarioTest);
        
        expect(testDB.find).toHaveBeenCalledTimes(1);
        expect(testDB.find).toHaveBeenCalledWith(usuarioTest.email);
        
        expect(resultado).toEqual({
            email: usuarioTest.email,
            nombre: 'Usuario de prueba'
        });

        console.log('Prueba completada con éxito!');
    });

    // Prueba adicional por si acaso
    it('no debería fallar con datos vacíos', () => {
        const usuarioVacio = {};
        
        const resultado = guardarUsuario(testDB, usuarioVacio);
        
        expect(testDB.save).toHaveBeenCalledWith(usuarioVacio);
        expect(testDB.find).toHaveBeenCalledWith(undefined);
        expect(resultado).toEqual({ email: undefined, nombre: 'Usuario de prueba' });
    });
});

// Esto es para que funcione con Jest
afterEach(() => {
    jest.clearAlltests();
});