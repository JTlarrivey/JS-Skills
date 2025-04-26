// Small, reusable functions
const toUpperCase = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

// Manual composition
const loudAndRepeat = str => repeat(exclaim(toUpperCase(str)));

console.log(loudAndRepeat("hello")); 
// Output: "HELLO! HELLO!"

// Or create a helper to compose functions automatically

// Compose function
const compose = (...fns) => (value) =>
  fns.reduceRight((acc, fn) => fn(acc), value);

// Usage
const composedFunction = compose(repeat, exclaim, toUpperCase);

console.log(composedFunction("hello")); 
// Output: "HELLO! HELLO!"
