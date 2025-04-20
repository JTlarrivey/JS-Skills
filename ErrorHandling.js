// ========= BASIC ERROR HANDLING =========
console.log("=== BASIC ERROR HANDLING ===");

function parseJSON(jsonString) {
  try {
    const result = JSON.parse(jsonString);
    console.log("Parsed successfully:", result);
    return result;
  } catch (error) {
    console.error("Failed to parse JSON:", error.message);
    // Return a default value or rethrow the error
    return null;
  } finally {
    console.log("This always executes, success or failure");
  }
}

// Test cases
parseJSON('{"valid": true}');  // Success
parseJSON('invalid json');     // Failure

// ========= RETHROWING ERRORS =========
console.log("\n=== RETHROWING ERRORS ===");

function processData(data) {
  try {
    if (!data) {
      throw new Error("No data provided");
    }
    console.log("Processing:", data);
  } catch (error) {
    console.error("Error in processData:", error.message);
    // Add context and rethrow
    throw new Error(`Processing failed: ${error.message}`);
  }
}

try {
  processData(null);
} catch (error) {
  console.error("Caught rethrown error:", error.message);
}

// ========= FINALLY BLOCK USAGE =========
console.log("\n=== FINALLY BLOCK ===");

function useResource() {
  let resource = allocateResource();
  
  try {
    // Work with the resource
    console.log("Using resource:", resource);
    if (Math.random() > 0.5) {
      throw new Error("Random operation failed");
    }
  } catch (error) {
    console.error("Error using resource:", error.message);
  } finally {
    // Always clean up
    releaseResource(resource);
    console.log("Resource released");
  }
}

// Mock functions
function allocateResource() {
  console.log("Allocating resource");
  return { id: Math.floor(Math.random() * 1000) };
}

function releaseResource(resource) {
  console.log(`Releasing resource ${resource.id}`);
}

// Test
useResource();
useResource();

// ========= NESTED TRY-CATCH =========
console.log("\n=== NESTED TRY-CATCH ===");

function complexOperation() {
  try {
    console.log("Starting complex operation");
    
    try {
      // Might throw TypeError
      const result = potentiallyFailingOperation();
      console.log("Operation result:", result);
    } catch (error) {
      if (error instanceof TypeError) {
        console.error("Type error occurred:", error.message);
      } else {
        throw error; // Rethrow unknown errors
      }
    }
    
    // More code that might throw
    anotherRiskyOperation();
    
  } catch (error) {
    console.error("Complex operation failed:", error.message);
  } finally {
    console.log("Complex operation completed");
  }
}

// Mock functions that might fail
function potentiallyFailingOperation() {
  if (Math.random() > 0.7) {
    throw new TypeError("Invalid type encountered");
  }
  return "success";
}

function anotherRiskyOperation() {
  if (Math.random() > 0.7) {
    throw new Error("Something went wrong");
  }
}

// Test
complexOperation();

// ========= CUSTOM ERROR TYPES =========
console.log("\n=== CUSTOM ERROR TYPES ===");

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateUser(user) {
  try {
    if (!user.name) {
      throw new ValidationError("Name is required", "name");
    }
    if (!user.email.includes("@")) {
      throw new ValidationError("Invalid email", "email");
    }
    console.log("User is valid");
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`Validation failed for ${error.field}: ${error.message}`);
    } else {
      console.error("Unexpected error:", error.message);
    }
  }
}

// Test
validateUser({ name: "", email: "test" });
validateUser({ name: "Alice", email: "alice@example.com" });

// ========= PROMISE ERROR HANDLING =========
console.log("\n=== PROMISE ERROR HANDLING ===");

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
  }
}

// Since we can't actually fetch in this example, let's simulate
function simulateFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ data: "success" });
      } else {
        reject(new Error("Network failure"));
      }
    }, 500);
  });
}

async function testFetch() {
  try {
    const result = await simulateFetch();
    console.log("Simulated fetch success:", result);
  } catch (error) {
    console.error("Simulated fetch error:", error.message);
  }
}

testFetch();
