function crearUsuario(nombre, rol) {
    // Validar el rol
    const roles = ["admin", "editor", "visitante"];
    if (!roles.includes(rol)) {
        throw new Error(`El rol "${rol}" no es válido.`);
    }
    
    // Crear una variable para un identificador único
    const id = Math.floor(Math.random() * 10000);
    
    // Función para obtener permisos según el rol
    function obtenerPermisos() {
        switch (rol) {
            case "admin":
            return ["crear", "editar", "eliminar", "leer"];
            case "editor":
            return ["editar", "leer"];
            case "visitante":
            return ["leer"];
        }
    }
        
    // Retoran el objeto "usuario"
    return {
        getId: () => id, // Acceder al identificador único
        nombre,
        rol,
        permisos: obtenerPermisos(),
        
        saludar() {
            switch (rol) {
            case "admin":
                return `Hola, soy ${nombre}, el administrador del sistema.`;
            case "editor":
                return `Hola, soy ${nombre}, quien edita el contenido.`;
            case "visitante":
                return `Hola, soy ${nombre}, estoy explorando el sistema.`;
            }
        },
        
        tienePermiso(accion) {
            return this.permisos.includes(accion);
        }
    };
}

// Ejemplos

const admin = crearUsuario("Lucía", "admin");           
const editor = crearUsuario("Marcos", "editor");
const invitado = crearUsuario("Sofía", "visitante");

console.log(admin.saludar());       // Hola, soy Lucía, el administrador del sistema.
console.log(editor.saludar());      // Hola, soy Marcos, quien edita el contenido.
console.log(invitado.saludar());    // Hola, soy Sofía, estoy explorando el sistema.

console.log(admin.getId());                     // 6910
console.log(editor.tienePermiso("crear"));      // false
console.log(admin.tienePermiso("eliminar"));    // true