// Higher-order function: accepts a function as an argument
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// Callback function
function logNumber(index) {
  console.log(`Index: ${index}`);
}

// Usage
repeat(3, logNumber);
// Output:
// Index: 0
// Index: 1
// Index: 2

//Returning a function

// Higher-order function: returns a function
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
