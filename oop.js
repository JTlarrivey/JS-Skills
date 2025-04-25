// 1. Encapsulation & Abstraction
class User {
  #password; // private field (Encapsulation)

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  // Public method (Abstraction)
  login(inputPassword) {
    return this.#password === inputPassword;
  }
}

// 2. Inheritance
class Admin extends User {
  constructor(username, password) {
    super(username, password);
    this.isAdmin = true;
  }

  // 3. Polymorphism
  login(inputPassword) {
    const isValid = super.login(inputPassword);
    return isValid ? "Admin access granted" : "Access denied";
  }
}

// Usage
const normalUser = new User("johnDoe", "1234");
const adminUser = new Admin("adminJane", "adminPass");

console.log(normalUser.login("1234")); // true
console.log(adminUser.login("adminPass")); // "Admin access granted"
