// Simple Wrapper (Functor-like)
function Box(value) {
  return {
    map: (fn) => Box(fn(value)),
    inspect: () => `Box(${value})`,
    value, // exposing the value if needed
  };
}

// Usage
const result = Box(5)
  .map(x => x + 2)
  .map(x => x * 3);

console.log(result.inspect()); // Box(21)


// Arrays in JS are already functors

[1, 2, 3].map(x => x * 2); 
// [2, 4, 6]
