// Create a lens for a specific property
function lens(prop) {
  return {
    get: (obj) => obj[prop],
    set: (value, obj) => ({ ...obj, [prop]: value }),
  };
}

// Example object
const user = {
  name: "Alice",
  age: 28,
};

// Create a lens for the "age" property
const ageLens = lens("age");

// View the age
console.log(ageLens.get(user)); // 28

// Set a new age (immutably)
const updatedUser = ageLens.set(29, user);

console.log(updatedUser); // { name: "Alice", age: 29 }
console.log(user);         // Original object remains unchanged
