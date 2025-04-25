// Factory function
function createUser(name, role = "user") {
  return {
    name,
    role,
    greet() {
      console.log(`Hello, I'm ${this.name} and my role is ${this.role}.`);
    },
  };
}

// Creating instances
const user1 = createUser("Alice");
const user2 = createUser("Bob", "admin");

user1.greet(); // Output: Hello, I'm Alice and my role is user.
user2.greet(); // Output: Hello, I'm Bob and my role is admin.
