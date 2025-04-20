// Function declaration and usage in JavaScript, including anonymous and arrow functions

// 1. Traditional function declaration (hoisted)
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"

// 2. Function expression (no hoisted)
const add = function(a, b) {
  return a + b;
};
console.log(`5 + 3 = ${add(5, 3)}`); // "5 + 3 = 8"

// 3. Anonymous function (used as callback)
const numbers = [1, 2, 3];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log("Doubled numbers:", doubled); // [2, 4, 6]

// 4. Arrow function (ES6)
const multiply = (a, b) => a * b;
console.log(`5 * 3 = ${multiply(5, 3)}`); // "5 * 3 = 15"

// 5. Multiple line arrow function
const createUser = (name, age) => {
  const user = {
    name,
    age,
    isAdult: age >= 18
  };
  return user;
};
console.log(createUser("Bob", 25));

// 6. Arrow function as a callback 
const squared = numbers.map(num => num ** 2);
console.log("Squared numbers:", squared); // [1, 4, 9]

// 7. Default parameters functions
function calculateTotal(price, tax = 0.16, discount = 0) {
  return price * (1 + tax) - discount;
}
console.log(`Total: $${calculateTotal(100)}`); // "Total: $116"
console.log(`Total: $${calculateTotal(100, 0.10, 10)}`); // "Total: $100"

// 8. Functions returning other functions
function createMultiplier(factor) {
  return number => number * factor;
}
const triple = createMultiplier(3);
console.log(`Triple of 7: ${triple(7)}`); // "Triple of 7: 21"

// 9. IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("This runs immediately!");
})();

// 10. Arrow function with "this" statement
const person = {
  name: "Carlos",
  traditionalGreet: function() {
    setTimeout(function() {
      console.log(`Hello, I'm ${this.name}`); // undefined ("this" changes )
    }, 100);
  },
  arrowGreet: function() {
    setTimeout(() => {
      console.log(`Hello, I'm ${this.name}`); // "Hello, I'm Carlos" ("this" remains)
    }, 100);
  }
};
person.traditionalGreet();
person.arrowGreet();
