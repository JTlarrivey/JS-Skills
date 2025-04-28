const numbers = [1, 2, 3, 4, 5];

// map: transform each element
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: keep only elements that match a condition
const even = numbers.filter(n => n % 2 === 0);
console.log(even); // [2, 4]

// reduce: combine all elements into a single value
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15
