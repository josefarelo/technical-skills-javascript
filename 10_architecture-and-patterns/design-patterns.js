// Factory Pattern - Creación de diferentes tipos de usuarios
function crearUsuario(tipo, nombre) {
    if (tipo === 'admin') {
        return {
            tipo: 'admin',
            nombre: nombre,
            permisos: ['leer', 'escribir', 'eliminar', 'administrar'],
            puedeAdministrar: true
        };
    } else if (tipo === 'editor') {
        return {
            tipo: 'editor',
            nombre: nombre,
            permisos: ['leer', 'escribir'],
            puedeEditar: true
        };
    } else {
        return {
            tipo: 'usuario',
            nombre: nombre,
            permisos: ['leer'],
            puedeComentar: true
        };
    }
}

const usuario1 = crearUsuario('admin', 'Carlos');
const usuario2 = crearUsuario('usuario', 'Maria');
console.log('Factory:', usuario1, usuario2);

// Singleton Pattern - Configuración global única
const ConfiguracionApp = (function() {
    let instancia;
    let version = '1.0.0';
    let entorno = 'produccion';

    function inicializar() {
        return {
            getVersion: function() { return version; },
            getEntorno: function() { return entorno; },
            setEntorno: function(nuevoEntorno) { entorno = nuevoEntorno; }
        };
    }

    return {
        getInstancia: function() {
            if (!instancia) {
                instancia = inicializar();
            }
            return instancia;
        }
    };
})();

const config1 = ConfiguracionApp.getInstancia();
const config2 = ConfiguracionApp.getInstancia();
config1.setEntorno('desarrollo');
console.log('Singleton:', config1 === config2, config2.getEntorno());

// Observer Pattern - Sistema de notificaciones
class Notificador {
    constructor() {
        this.suscriptores = [];
        this.ultimoMensaje = null;
    }

    suscribir(callback) {
        this.suscriptores.push(callback);
        if (this.ultimoMensaje) {
        callback(this.ultimoMensaje);
        }
    }

    desuscribir(callback) {
        this.suscriptores = this.suscriptores.filter(sub => sub !== callback);
    }

    notificar(mensaje) {
        this.ultimoMensaje = mensaje;
        this.suscriptores.forEach(sub => sub(mensaje));
    }
}

const notificador = new Notificador();

function logMensaje(mensaje) {
    console.log(`Log: ${mensaje}`);
}

notificador.suscribir(mensaje => {
    console.log(`Usuario 1 recibió: ${mensaje}`);
});
notificador.suscribir(logMensaje);

notificador.notificar('Primer mensaje');
notificador.desuscribir(logMensaje);
notificador.notificar('Segundo mensaje');