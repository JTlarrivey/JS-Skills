// Array: ordered list of items
const fruits = ['apple', 'banana', 'cherry'];
fruits.push('date'); // Add an item
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']

// Object: key-value pairs
const user = {
  name: 'Alice',
  age: 30,
};
user.email = 'alice@example.com'; // Add a property
console.log(user); // { name: 'Alice', age: 30, email: 'alice@example.com' }

// Set: collection of unique values
const uniqueNumbers = new Set([1, 2, 3, 3, 4]);
uniqueNumbers.add(5);
console.log(uniqueNumbers); // Set { 1, 2, 3, 4, 5 }

// Map: collection of key-value pairs with any type of key
const capitals = new Map();
capitals.set('France', 'Paris');
capitals.set('Spain', 'Madrid');
console.log(capitals.get('France')); // Paris
