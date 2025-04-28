// Create a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Change to false to simulate rejection
  
  setTimeout(() => {
    if (success) {
      resolve("Promise fulfilled!");
    } else {
      reject("Promise rejected.");
    }
  }, 1000);
});

// Log the Promise stages
console.log("Initial state: pending...");

myPromise
  .then(result => {
    console.log("State after success:", result);
  })
  .catch(error => {
    console.error("State after failure:", error);
  });
