// Versión con múltiples mocks complicados
class DatabaseService {
    constructor() {
        // Conexión a la base de datos simulada
    }

    getUser(id) {
        // Simula obtener usuario de DB
    }
}

class EmailService {
    constructor() {
        // Configuración de email simulada
    }

    sendEmail(user, message) {
        // Simula enviar email
    }
}

class UserManager {
    constructor(dbService, emailService) {
        this.dbService = dbService;
        this.emailService = emailService;
    }

    updateUserEmail(userId, newEmail) {
        const user = this.dbService.getUser(userId);
        if (!user) throw new Error('User not found');
        
        user.email = newEmail;
        this.emailService.sendEmail(user, 'Your email was updated');
        return user;
    }
}

// Test con mocks
describe('UserManager with mocks', () => {
    it('should update user email and send notification', () => {
        const mockDbService = {
            getUser: jest.fn().mockReturnValue({ id: 1, name: 'John', email: 'old@test.com' })
        };
        
        const mockEmailService = {
            sendEmail: jest.fn()
        };

        const userManager = new UserManager(mockDbService, mockEmailService);
        const updatedUser = userManager.updateUserEmail(1, 'new@test.com');

        expect(updatedUser.email).toBe('new@test.com');
        expect(mockEmailService.sendEmail).toHaveBeenCalled();
    });
});

// Versión más simple sin mocks necesarios
class SimpleUser {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
        return this;
    }
}

class SimpleUserManager {
    updateUserEmail(user, newEmail) {
        if (!user) throw new Error('User is required');
        return user.updateEmail(newEmail);
    }
}

// Test sin mocks
describe('SimpleUserManager without mocks', () => {
    it('should update user email', () => {
        const user = new SimpleUser(1, 'John', 'old@test.com');
        const userManager = new SimpleUserManager();
        const updatedUser = userManager.updateUserEmail(user, 'new@test.com');

        expect(updatedUser.email).toBe('new@test.com');
    });
});
