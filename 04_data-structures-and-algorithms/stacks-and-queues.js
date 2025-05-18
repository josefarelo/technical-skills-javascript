// Implementación de Stack (LIFO) con validaciones y capacidad máxima
class Stack {
    constructor(maxSize = 1000) {
        if (!Number.isInteger(maxSize) || maxSize <= 0) {
            throw new Error('La capacidad máxima debe ser un número positivo');
        }
        this.items = [];
        this.maxSize = maxSize;
        this.count = 0;
    }

    push(element) {
        if (this.isFull()) {
            throw new Error('Stack overflow - No se pueden añadir más elementos');
        }
        this.items[this.count] = element;
        this.count++;
        return this.count;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack underflow - No hay elementos para eliminar');
        }
        this.count--;
        const removedItem = this.items[this.count];
        delete this.items[this.count];
        return removedItem;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('La pila está vacía');
        }
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.count >= this.maxSize;
    }

    size() {
        return this.count;
    }

    clear() {
        this.items = [];
        this.count = 0;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Pila vacía');
            return;
        }
        console.log('Contenido de la pila:');
        for (let i = this.count - 1; i >= 0; i--) {
            console.log(`[${i}] ${this.items[i]}`);
        }
    }
}

// Implementación de Queue (FIFO) con validaciones y capacidad máxima
class Queue {
    constructor(maxSize = 1000) {
        if (!Number.isInteger(maxSize) || maxSize <= 0) {
            throw new Error('La capacidad máxima debe ser un número positivo');
        }
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
        this.maxSize = maxSize;
    }

    enqueue(element) {
        if (this.isFull()) {
            throw new Error('Queue overflow - No se pueden añadir más elementos');
        }
        this.items[this.backIndex] = element;
        this.backIndex++;
        return this.size();
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue underflow - No hay elementos para eliminar');
        }
        const removedItem = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return removedItem;
    }

    front() {
        if (this.isEmpty()) {
            throw new Error('La cola está vacía');
        }
        return this.items[this.frontIndex];
    }

    isEmpty() {
        return this.size() === 0;
    }

    isFull() {
        return this.size() >= this.maxSize;
    }

    size() {
        return this.backIndex - this.frontIndex;
    }

    clear() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Cola vacía');
            return;
        }
        console.log('Contenido de la cola:');
        for (let i = this.frontIndex; i < this.backIndex; i++) {
            console.log(`[${i - this.frontIndex}] ${this.items[i]}`);
        }
    }
}

// Ejemplo de uso con manejo de errores
try {
    // Demo Stack
    console.log('=== DEMO STACK ===');
    const browserHistory = new Stack(5);

    browserHistory.push('google.com');
    browserHistory.push('youtube.com');
    browserHistory.push('github.com');

    console.log('Última página visitada:', browserHistory.peek());
    console.log('Volviendo atrás...', browserHistory.pop());
    console.log('Página actual:', browserHistory.peek());

    console.log('Tamaño del historial:', browserHistory.size());
    browserHistory.print();

    // Demo Queue
    console.log('\n=== DEMO QUEUE ===');
    const printerQueue = new Queue(3);

    printerQueue.enqueue('Documento1.pdf');
    printerQueue.enqueue('Documento2.pdf');
    printerQueue.enqueue('Presentacion.pptx');

    console.log('Documento en impresión:', printerQueue.front());
    console.log('Documento impreso:', printerQueue.dequeue());
    console.log('Siguiente documento:', printerQueue.front());

    console.log('Documentos en cola:', printerQueue.size());
    printerQueue.print();

    // Forzando errores para demostrar validaciones
    // const invalidStack = new Stack(-5); // Error
    // printerQueue.enqueue('Extra.pdf'); // Error cuando se descomenta
} catch (error) {
    console.error('Error:', error.message);
}