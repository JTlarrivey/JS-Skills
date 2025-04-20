// Understanding Lexical Scoping and Variable Hoisting in JavaScript

// ========== HOISTING DEMONSTRATION ==========
console.log("\n=== HOISTING BEHAVIOR ===");

// 1. Variable Hoisting
console.log(hoistedVar); // Output: undefined (not ReferenceError)
var hoistedVar = "I'm hoisted";

// console.log(hoistedLet); // Would throw ReferenceError (Temporal Dead Zone)
let hoistedLet = "I'm not hoisted";

// 2. Function Hoisting
hoistedFunction(); // Works because function declarations are hoisted
function hoistedFunction() {
  console.log("I'm a hoisted function");
}

// hoistedArrow(); // Would throw TypeError (not hoisted)
const hoistedArrow = () => console.log("I'm not hoisted");
// hoistedArrow(); // Works here

// ========== LEXICAL SCOPING DEMONSTRATION ==========
console.log("\n=== LEXICAL SCOPING ===");

// 1. Global Scope
const globalVar = "I'm global";

function outerFunction() {
  // 2. Outer Function Scope
  const outerVar = "I'm in outer function";
  
  function innerFunction() {
    // 3. Inner Function Scope
    const innerVar = "I'm in inner function";
    
    console.log(innerVar); // "I'm in inner function" (local)
    console.log(outerVar); // "I'm in outer function" (parent scope)
    console.log(globalVar); // "I'm global" (global scope)
  }
  
  innerFunction();
  
  // console.log(innerVar); // Would throw ReferenceError (child scope not accessible)
}

outerFunction();

// ========== BLOCK SCOPING DEMONSTRATION ==========
console.log("\n=== BLOCK SCOPING ===");

// 1. var has function scope (no block scope)
if (true) {
  var varScoped = "I'm function scoped (var)";
  let letScoped = "I'm block scoped (let)";
  const constScoped = "I'm block scoped (const)";
}

console.log(varScoped); // Accessible (no block scope)
// console.log(letScoped); // Would throw ReferenceError
// console.log(constScoped); // Would throw ReferenceError

// ========== SCOPE CHAIN DEMONSTRATION ==========
console.log("\n=== SCOPE CHAIN ===");

const globalValue = "global";

function parentScope() {
  const parentValue = "parent";
  
  function childScope() {
    const childValue = "child";
    
    console.log(childValue); // "child" (local)
    console.log(parentValue); // "parent" (parent scope)
    console.log(globalValue); // "global" (global scope)
  }
  
  childScope();
  
  // console.log(childValue); // Would throw ReferenceError
}

parentScope();

// ========== CLOSURES DEMONSTRATION ==========
console.log("\n=== CLOSURES ===");

function createCounter() {
  let count = 0; // Private variable due to closure
  
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
console.log(counter.getCount()); // 1
// console.log(count); // Would throw ReferenceError (private)
