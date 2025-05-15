const mapTransducer = (fn) => (reducer) => (acc, item) => reducer(acc, fn(item));

const filterTransducer = (predicate) => (reducer) => (acc, item) => 
    predicate(item) ? reducer(acc, item) : acc;

const compose = (...transducers) => (reducer) => 
    transducers.reduceRight((acc, transducer) => transducer(acc), reducer);

// Ejemplo de uso
const data = [1, 2, 3, 4, 5];
const sumReducer = (acc, item) => acc + item;

const double = (x) => x * 2;
const isEven = (x) => x % 2 === 0;

const processData = compose(
    mapTransducer(double),
    filterTransducer(isEven)
)(sumReducer);

const result = data.reduce(processData, 0);
console.log(result); // 18 (2*2 + 4*2 + 6*2)