// Simulate an async function that may fail
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // Random success or failure
      
      if (success) {
        resolve({ id: 1, name: "Example" });
      } else {
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}

// Async function with try-catch-finally
async function getData() {
  try {
    const data = await fetchData();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    console.log("Finished attempting to fetch data.");
  }
}

// Execute the async function
getData();
