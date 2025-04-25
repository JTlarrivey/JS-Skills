// Normal function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

// Curried version
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

// Usage
const addFive = curriedAdd(5);
console.log(addFive(10)); // 15

// Can also write it with arrow functions for brevity

const curriedMultiply = a => b => a * b;

const double = curriedMultiply(2);
console.log(double(8)); // 16
