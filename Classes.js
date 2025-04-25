// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Subclass
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks. It's a ${this.breed}.`);
  }
}

// Usage
const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // Output: "Buddy barks. It's a Golden Retriever."
