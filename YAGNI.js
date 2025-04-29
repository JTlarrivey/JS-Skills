// ❌ YAGNI violation – adding features just in case
class User {
  constructor(name) {
    this.name = name;
    this.settings = {};
    this.logger = function () {
      // not needed yet
    };
    this.permissions = []; // not required for current scope
  }
}

// ✅ YAGNI – keep it minimal and extend only when needed
class User {
  constructor(name) {
    this.name = name;
  }
}

const user = new User("Joaquin");
console.log(user.name); // Joaquin
