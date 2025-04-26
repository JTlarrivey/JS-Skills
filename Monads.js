// Promise chain: handling asynchronous context
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json()) // unwraps the response
  .then(data => {
    console.log('Todo title:', data.title);
  })
  .catch(error => {
    console.error('Error fetching todo:', error);
  });

// Maybe Monad
function Maybe(value) {
  return {
    map: (fn) => (value == null ? Maybe(null) : Maybe(fn(value))),
    unwrap: () => value,
  };
}

// Usage
const result = Maybe(5)
  .map(x => x * 2)
  .map(x => null) // Introduces a "null" (like an error or missing value)
  .map(x => x + 1); // This won't run

console.log(result.unwrap()); // null
