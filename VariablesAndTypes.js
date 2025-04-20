// Variable declaration using var, let and const, and understanding primitive types and objects

// 1. Variable declaration
var oldVariable = "I'm a var variable"; // Function scope
let mutableVariable = "I'm a let variable"; // Block scope
const immutableVariable = "I'm a const variable"; // Block scope, can't be reassigned

// 2. Primitive types examples
const stringPrimitive = "Hello World"; // String
const numberPrimitive = 42; // Number
const booleanPrimitive = true; // Boolean
const nullPrimitive = null; // Null
const undefinedPrimitive = undefined; // Undefined
const symbolPrimitive = Symbol('unique'); // Symbol (ES6)

// 3. Objects examples
const objectExample = { 
  name: "John", 
  age: 30 
}; // Object literal

const arrayExample = [1, 2, 3]; // Array (type of object)

function functionExample() { 
  return "I'm a function"; 
} // Function (type of object)

// 4. Demonstrating differences
console.log("--- Variable Types ---");
console.log(typeof stringPrimitive); // "string"
console.log(typeof numberPrimitive); // "number"
console.log(typeof booleanPrimitive); // "boolean"
console.log(typeof nullPrimitive); // "object" (known JavaScript quirk)
console.log(typeof undefinedPrimitive); // "undefined"
console.log(typeof symbolPrimitive); // "symbol"
console.log(typeof objectExample); // "object"
console.log(typeof arrayExample); // "object"
console.log(typeof functionExample); // "function"

// 5. Demonstrating variable scope and mutability
if (true) {
  var varScoped = "I'm var scoped";
  let letScoped = "I'm let scoped";
  const constScoped = "I'm const scoped";
  
  mutableVariable = "I can be changed";
  // immutableVariable = "This would throw an error"; // Uncomment to see error
}

console.log("\n--- Variable Scope ---");
console.log(varScoped); // Accessible
// console.log(letScoped); // Would throw ReferenceError
// console.log(constScoped); // Would throw ReferenceError
