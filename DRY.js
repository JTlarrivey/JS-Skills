// ❌ Without DRY – duplicated logic
function getAdminFullName(admin) {
  return `${admin.firstName} ${admin.lastName}`;
}

function getUserFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

// ✅ DRY – extract shared logic into a reusable function
function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

const admin = { firstName: "Alice", lastName: "Smith" };
const user = { firstName: "Bob", lastName: "Jones" };

console.log(getFullName(admin)); // Alice Smith
console.log(getFullName(user));  // Bob Jones
