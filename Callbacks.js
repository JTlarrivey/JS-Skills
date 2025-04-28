// Asynchronous operation with a callback
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Example" };
    callback(data);
  }, 1000); // Simulate a 1-second delay
}

// Callback function
function handleData(data) {
  console.log("Data received:", data);
}

// Start the async operation
fetchData(handleData);
