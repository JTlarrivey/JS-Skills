// 1. S — Single Responsibility Principle (SRP)
// A class or function should have one and only one reason to change.

// ❌ Violates SRP: Handles both data and email logic
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sendWelcomeEmail() {
    console.log(`Sending welcome email to ${this.email}`);
  }
}

// ✅ SRP: Separate responsibilities
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    console.log(`Sending welcome email to ${user.email}`);
  }
}

// 2.  O — Open/Closed Principle (OCP)
// Software entities should be open for extension but closed for modification.

// ❌ Violates OCP: Modifies existing logic to add new notifications
class Notification {
  send(type, message) {
    if (type === "email") {
      console.log(`Email: ${message}`);
    } else if (type === "sms") {
      console.log(`SMS: ${message}`);
    }
  }
}

// 2. OCP: Extend via new classes without modifying base
class Notifier {
  send(message) {
    throw new Error("Method not implemented.");
  }
}

class EmailNotifier extends Notifier {
  send(message) {
    console.log(`Email: ${message}`);
  }
}

class SMSNotifier extends Notifier {
  send(message) {
    console.log(`SMS: ${message}`);
  }
}

// 3. L — Liskov Substitution Principle (LSP)
// Subtypes should be replaceable for their base types without breaking behavior.

// ✅ LSP respected
class Bird {
  fly() {
    console.log("Flying...");
  }
}

class Sparrow extends Bird {}
class Eagle extends Bird {}

// ❌ Violation: Ostrich can't fly but inherits fly()
class Ostrich extends Bird {
  fly() {
    throw new Error("I can't fly!");
  }
}

// ✅ Refactored: Separate non-flying birds
class NonFlyingBird {
  walk() {
    console.log("Walking...");
  }
}

// 4. I — Interface Segregation Principle (ISP)
// Clients should not be forced to depend on interfaces they do not use.

// ❌ Violates ISP: All animals must implement fly()
class Animal {
  eat() {}
  fly() {}
}

// ✅ ISP: Separate behaviors
class Eater {
  eat() {
    console.log("Eating...");
  }
}

class Flyer {
  fly() {
    console.log("Flying...");
  }
}

class Dog extends Eater {}
class Bird extends Eater {
  constructor() {
    super();
    this.flyer = new Flyer();
  }

  fly() {
    this.flyer.fly();
  }
}


// 5. D — Dependency Inversion Principle (DIP)
// High-level modules should not depend on low-level modules. Both should depend on abstractions.

// ❌ Violates DIP: tightly coupled
class MySQLDatabase {
  save(data) {
    console.log("Saving to MySQL:", data);
  }
}

class UserService {
  constructor() {
    this.db = new MySQLDatabase(); // tightly coupled
  }

  createUser(data) {
    this.db.save(data);
  }
}

// ✅ DIP: decoupled via abstraction
class UserService {
  constructor(database) {
    this.database = database;
  }

  createUser(data) {
    this.database.save(data);
  }
}

class MongoDB {
  save(data) {
    console.log("Saving to MongoDB:", data);
  }
}

// Usage
const mongo = new MongoDB();
const userService = new UserService(mongo);
userService.createUser({ name: "Alice" });


