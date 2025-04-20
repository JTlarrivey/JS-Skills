// Understanding Execution Context and Context Binding

// ===== DEFAULT CONTEXT BEHAVIOR =====
console.log("=== DEFAULT CONTEXT ===");

const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // "Hello, my name is Alice" - 'this' refers to person

const greetFunc = person.greet;
greetFunc(); // "Hello, my name is undefined" - 'this' lost context

// ===== EXPLICIT CONTEXT BINDING =====
console.log("\n=== EXPLICIT BINDING ===");

// 1. call() - immediately invokes with context
greetFunc.call(person); // "Hello, my name is Alice"

// 2. apply() - similar to call() but accepts array arguments
function introduce(age, job) {
  console.log(`I'm ${this.name}, ${age} years old, working as ${job}`);
}
introduce.apply(person, [30, "developer"]); // Uses array args

// 3. bind() - creates new permanently bound function
const boundGreet = greetFunc.bind(person);
boundGreet(); // "Hello, my name is Alice"

// ===== ARROW FUNCTIONS AND LEXICAL 'this' =====
console.log("\n=== ARROW FUNCTIONS ===");

const team = {
  name: "Dream Team",
  members: ["Alice", "Bob", "Charlie"],
  listMembers: function() {
    // Traditional function - needs binding
    this.members.forEach(function(member) {
      console.log(`${member} from ${this.name}`); // 'this' undefined
    });
    
    // Arrow function - captures lexical 'this'
    this.members.forEach(member => {
      console.log(`${member} from ${this.name}`); // 'this' correctly bound
    });
  }
};
team.listMembers();

// ===== CONSTRUCTOR CONTEXT =====
console.log("\n=== CONSTRUCTOR CONTEXT ===");

function User(name) {
  this.name = name;
  this.sayHi = function() {
    console.log(`Hi from ${this.name}`);
  };
}

const user = new User("John"); // 'this' bound to new instance
user.sayHi(); // "Hi from John"

// ===== DOM EVENT HANDLER CONTEXT =====
console.log("\n=== EVENT HANDLER CONTEXT ===");

const button = document.createElement('button');
button.textContent = "Click me";

// Traditional function - 'this' refers to DOM element
button.addEventListener('click', function() {
  console.log("Button context:", this); // The button element
});

// Arrow function - captures lexical 'this'
button.addEventListener('click', () => {
  console.log("Lexical context:", this); // Window (or undefined in strict mode)
});

// ===== CLASS CONTEXT =====
console.log("\n=== CLASS CONTEXT ===");

class Employee {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Employee ${this.name} says hello`);
  }
  
  delayedGreet() {
    setTimeout(function() {
      console.log(`Delayed: Employee ${this.name} says hello`); // 'this' lost
    }, 100);
    
    setTimeout(() => {
      console.log(`Delayed (arrow): Employee ${this.name} says hello`); // 'this' correct
    }, 100);
  }
}

const emp = new Employee("Sarah");
emp.greet();
emp.delayedGreet();
