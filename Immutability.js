// Original data
const user = {
  name: "Sarah",
  age: 30,
};

// Immutable update: create a new object
const updatedUser = {
  ...user,
  age: 31, // changed field
};

console.log(user);        // { name: "Sarah", age: 30 }
console.log(updatedUser); // { name: "Sarah", age: 31 }

// Same principle applied to arrays

const numbers = [1, 2, 3];

// Immutable addition
const newNumbers = [...numbers, 4];

console.log(numbers);     // [1, 2, 3]
console.log(newNumbers);  // [1, 2, 3, 4]
