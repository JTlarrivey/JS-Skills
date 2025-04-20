// Using conditional statements and loops (if, else, switch, for, while)

// 1. Conditional statements - if/else
const age = 18;

if (age < 13) {
  console.log("You are a child");
} else if (age >= 13 && age < 18) {
  console.log("You are a teenager");
} else {
  console.log("You are an adult");
}

// 2. Conditional statements - switch
const dayOfWeek = "Monday";
let message;

switch (dayOfWeek) {
  case "Monday":
    message = "Start of the work week";
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    message = "Midweek days";
    break;
  case "Friday":
    message = "Almost weekend!";
    break;
  case "Saturday":
  case "Sunday":
    message = "Weekend!";
    break;
  default:
    message = "Invalid day";
}

console.log(`Today is ${dayOfWeek}: ${message}`);

// 3. Loops - for
console.log("\nCounting from 1 to 5 with for loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 4. Loops - while
console.log("\nCounting down from 5 with while loop:");
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}

// 5. Loops - do...while
console.log("\nCounting up to 3 with do...while loop:");
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 3);

// 6. Practical example combining conditions and loops
console.log("\nFinding even numbers between 1 and 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// 7. Loop control with break and continue
console.log("\nLoop with break at 5 and skipping 3:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Breaking at 5");
    break;
  }
  if (i === 3) {
    console.log("Skipping 3");
    continue;
  }
  console.log(i);
}
