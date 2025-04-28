// Bubble Sort
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// Quick Sort
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.filter(el => el < pivot);
  const right = arr.filter(el => el > pivot);
  const equal = arr.filter(el => el === pivot);
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return [...result, ...left, ...right];
}

// Example usage
const array = [5, 2, 9, 1, 5, 6];

console.log(bubbleSort([...array])); // [1, 2, 5, 5, 6, 9]
console.log(quickSort([...array]));  // [1, 2, 5, 5, 6, 9]
console.log(mergeSort([...array]));  // [1, 2, 5, 5, 6, 9]
