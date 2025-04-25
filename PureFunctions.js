// Pure function
function calculateArea(width, height) {
  return width * height;
}

// Usage
console.log(calculateArea(5, 10)); // 50
console.log(calculateArea(5, 10)); // Still 50 — no side effects, same input => same output

//Impure function example for contrast

let counter = 0;

function incrementCounter() {
  counter++; // Modifies external state = side effect
  return counter;
}
