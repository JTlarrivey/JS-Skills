// ❌ Over-engineered and hard to read
function isEven(number) {
  return !Boolean(number % 2);
}

// ✅ KISS – simple and clear
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(5)); // false
