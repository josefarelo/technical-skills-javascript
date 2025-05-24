// Definición de interfaces (contratos) para los TADs

// Interfaz para Pila (Stack)
class StackInterface {
    push(element) { throw new Error("Método no implementado"); }
    pop() { throw new Error("Método no implementado"); }
    peek() { throw new Error("Método no implementado"); }
    isEmpty() { throw new Error("Método no implementado"); }
    size() { throw new Error("Método no implementado"); }
}

// Interfaz para Cola (Queue)
class QueueInterface {
    enqueue(element) { throw new Error("Método no implementado"); }
    dequeue() { throw new Error("Método no implementado"); }
    front() { throw new Error("Método no implementado"); }
    isEmpty() { throw new Error("Método no implementado"); }
    size() { throw new Error("Método no implementado"); }
}

// Interfaz para Lista Enlazada (LinkedList)
class LinkedListInterface {
    append(element) { throw new Error("Método no implementado"); }
    insert(position, element) { throw new Error("Método no implementado"); }
    remove(element) { throw new Error("Método no implementado"); }
    removeAt(position) { throw new Error("Método no implementado"); }
    indexOf(element) { throw new Error("Método no implementado"); }
    isEmpty() { throw new Error("Método no implementado"); }
    size() { throw new Error("Método no implementado"); }
    toString() { throw new Error("Método no implementado"); }
}

// Implementación concreta de una Pila (Stack)
class Stack extends StackInterface {
    constructor() {
        super();
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) throw new Error("Pila vacía");
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) throw new Error("Pila vacía");
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Ejemplo de uso
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.peek()); // 20
console.log(myStack.pop());  // 20
console.log(myStack.size()); // 1