// ❌ Messy, inconsistent style
function sayhello(name){console.log("Hi, "+name+"!");}sayhello("Alice");

// ✅ Clean, readable style following conventions
function sayHello(name) {
  console.log(`Hi, ${name}!`);
}

sayHello("Alice");

/////////////////////////////////////////////////////////////////////////////////////////////

// ❌ Messy and unclear
var a = 5, b = 10; function calc(){return a+b;}console.log(calc());

// ✅ Clean and descriptive
const width = 5;
const height = 10;

function calculateArea() {
  return width + height;
}

console.log(calculateArea());

/////////////////////////////////////////////////////////////////////////////////////////////

// ❌ Poor readability and inconsistent braces
function check(n){if(n>0){console.log("Positive")}else console.log("Not positive")}

check(3);

// ✅ Clear control flow and brace usage
function checkNumber(n) {
  if (n > 0) {
    console.log("Positive");
  } else {
    console.log("Not positive");
  }
}

checkNumber(3);



