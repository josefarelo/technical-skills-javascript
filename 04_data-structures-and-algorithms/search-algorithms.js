// Búsqueda lineal
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Retorna el índice si encuentra el elemento
        }
    }
    return -1; // Retorna -1 si no lo encuentra
}

// Búsqueda binaria (requiere array ordenado)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Ejemplo de uso
const array = [4, 2, 7, 1, 9, 3, 6];
const targetNumber = 7;

// Búsqueda lineal
console.log("Búsqueda lineal:");
const linearResult = linearSearch(array, targetNumber);
console.log(linearResult !== -1 ? `Encontrado en índice ${linearResult}` : "No encontrado");

// Búsqueda binaria (requiere ordenar primero)
array.sort((a, b) => a - b);
console.log("Array ordenado:", array);

console.log("Búsqueda binaria:");
const binaryResult = binarySearch(array, targetNumber);
console.log(binaryResult !== -1 ? `Encontrado en índice ${binaryResult}` : "No encontrado");