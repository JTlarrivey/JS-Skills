// Closures: Functions that retain access to their lexical scope

// ===== BASIC CLOSURE EXAMPLE =====
function createGreeter(greeting) {
  // 'greeting' is captured by the closure
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

sayHello("Alice"); // "Hello, Alice!" (remembers "Hello")
sayHi("Bob");      // "Hi, Bob!" (remembers "Hi")

// ===== PRIVATE VARIABLES WITH CLOSURES =====
function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1
// console.log(count); // Error: count is not accessible directly

// ===== CLOSURE IN LOOPS =====
// Common pitfall and solution
console.log("\nClosures in loops:");
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(`var: ${i}`); // All show 3 (problem)
  }, 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log(`let: ${j}`); // Shows 0, 1, 2 (solution)
  }, 100);
}

// Alternative solution with IIFE
for (var k = 0; k < 3; k++) {
  (function(index) {
    setTimeout(function() {
      console.log(`IIFE: ${index}`); // Shows 0, 1, 2
    }, 100);
  })(k);
}

// ===== PRACTICAL USE CASE: EVENT HANDLERS =====
function setupButtons() {
  const buttons = document.querySelectorAll('button');
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      console.log(`Button ${i} clicked`);
    });
  }
}

// ===== MEMOIZATION PATTERN =====
function createMemoizedFunction(fn) {
  const cache = {}; // Closed over by the returned function
  
  return function(arg) {
    if (cache[arg] !== undefined) {
      console.log('Returning cached result');
      return cache[arg];
    }
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

function expensiveCalculation(x) {
  console.log('Calculating...');
  return x * x;
}

const memoizedCalc = createMemoizedFunction(expensiveCalculation);
console.log(memoizedCalc(5)); // Calculates
console.log(memoizedCalc(5)); // Returns cached
