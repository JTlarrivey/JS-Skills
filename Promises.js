// Create a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Change to false to simulate an error
      
      if (success) {
        resolve({ id: 1, name: "Example" });
      } else {
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}

// Using the Promise
fetchData()
  .then(data => {
    console.log("Data received:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
