// Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index where the target is found
    }
  }
  return -1; // Not found
}

// Binary Search (array must be sorted)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  
  return -1; // Not found
}

// Example usage
const numbers = [1, 3, 5, 7, 9, 11];

console.log(linearSearch(numbers, 7)); // 3
console.log(binarySearch(numbers, 7)); // 3
console.log(linearSearch(numbers, 4)); // -1
console.log(binarySearch(numbers, 4)); // -1
