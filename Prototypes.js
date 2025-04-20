// Creating a base object (Animal)
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log(`Hello, I am ${this.name}`);
};

// Creating a derived object (Dog) that inherits from Animal
function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor
  this.breed = breed;
}

// Set up inheritance: Dog prototype inherits from Animal prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add a method specific to Dog
Dog.prototype.bark = function () {
  console.log(`${this.name} says: Woof!`);
};

// Creating instances
const myDog = new Dog("Buddy", "Golden Retriever");

myDog.sayHello(); // Inherited from Animal
myDog.bark();     // Defined in Dog

console.log("Breed:", myDog.breed);
