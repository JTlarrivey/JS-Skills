// Creating an object to represent a user profile
const userProfile = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isActive: true,
  hobbies: ["reading", "cycling", "traveling"],

  // Method to get full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

// Accessing properties
console.log("First Name:", userProfile.firstName);
console.log("Full Name:", userProfile.getFullName());
console.log("Hobbies:", userProfile.hobbies.join(", "));

// Modifying properties
userProfile.age = 31;
userProfile.isActive = false;

// Adding a new property
userProfile.email = "john.doe@example.com";

// Deleting a property
delete userProfile.hobbies;

// Logging updated object
console.log("\nUpdated Profile:");
console.log(userProfile);
