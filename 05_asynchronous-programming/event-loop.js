console.log("Inicio");

setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 100);

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => {
    console.log("Promise 2");
    Promise.resolve().then(() => console.log("Promise interna"));
});

console.log("Fin");