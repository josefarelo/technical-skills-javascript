// Definimos una interfaz implícita para el logger
class LoggerInterface {
    log(mensaje) {
        throw new Error('Método log() debe ser implementado');
    }
}

// Implementación concreta para consola
class ConsoleLogger extends LoggerInterface {
    log(mensaje) {
        console.log(`[CONSOLE LOG]: ${mensaje}`);
    }
}

// Otra implementación que guarda en un array
class ArrayLogger extends LoggerInterface {
    constructor() {
        super();
        this.logs = [];
    }

    log(mensaje) {
        this.logs.push(mensaje);
    }

    getLogs() {
        return this.logs;
    }
}

// Servicio que usa el logger mediante inyección
class UserService {
    constructor(logger) {
        if (!(logger instanceof LoggerInterface)) {
        throw new Error('Logger debe implementar LoggerInterface');
        }
        this.logger = logger;
    }

    createUser(username) {
        try {
            // Lógica de negocio
            this.logger.log(`Nuevo usuario: ${username}`);
            return true;
        } catch (error) {
            this.logger.log(`Error al crear usuario: ${error.message}`);
            return false;
        }
    }
}

// Uso con logger de consola
const consoleLogger = new ConsoleLogger();
const userService1 = new UserService(consoleLogger);
userService1.createUser('Juan');

// Uso con logger de array (para testing)
const testLogger = new ArrayLogger();
const userService2 = new UserService(testLogger);
userService2.createUser('Maria');
console.log(testLogger.getLogs());

// Ejemplo de otra implementación que podríamos crear
class FileLogger extends LoggerInterface {
    log(mensaje) {
        // Implementación ficticia para guardar en archivo
        console.log(`(Simulando guardar en archivo) ${mensaje}`);
    }
}

// Cambiar fácilmente la implementación
const fileLogger = new FileLogger();
const userService3 = new UserService(fileLogger);
userService3.createUser('Pedro');