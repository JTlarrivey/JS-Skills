console.log("Start");

// Simulate an asynchronous operation
setTimeout(() => {
  console.log("Timeout callback");
}, 0);

// Simulate a Promise
Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("End");
