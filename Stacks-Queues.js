// Stack (LIFO - Last In, First Out)
const stack = [];

// Push elements onto the stack
stack.push('first');
stack.push('second');
stack.push('third');

console.log(stack.pop()); // 'third' (last in, first out)
console.log(stack);       // ['first', 'second']

// Queue (FIFO - First In, First Out)
const queue = [];

// Enqueue elements
queue.push('first');
queue.push('second');
queue.push('third');

console.log(queue.shift()); // 'first' (first in, first out)
console.log(queue);         // ['second', 'third']
