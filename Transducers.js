// Without a transducer, chaining .map() and .filter() on an array creates intermediate arrays:

const numbers = [1, 2, 3, 4, 5];

// Normal chaining: creates intermediate arrays
const result = numbers
  .map(x => x * 2)    // [2, 4, 6, 8, 10]
  .filter(x => x > 5); // [6, 8, 10]

console.log(result); // [6, 8, 10]

// With a transducer, we can combine transformations into one efficient pass:

// Basic transducer tools
const map = (fn) => (reducer) => (acc, value) => reducer(acc, fn(value));
const filter = (predicate) => (reducer) => (acc, value) =>
  predicate(value) ? reducer(acc, value) : acc;

// Final reducer
const arrayPushReducer = (acc, value) => {
  acc.push(value);
  return acc;
};

// Compose transformations
const composedTransformation = (map(x => x * 2))(filter(x => x > 5)(arrayPushReducer));

// Apply in one pass
const result = numbers.reduce(composedTransformation, []);

console.log(result); // [6, 8, 10]
