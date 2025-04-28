// Stack (LIFO - Last In, First Out)
class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) {
    this.items.push(element);
  }
  
  pop() {
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}

// Queue (FIFO - First In, First Out)
class Queue {
  constructor() {
    this.items = [];
  }
  
  enqueue(element) {
    this.items.push(element);
  }
  
  dequeue() {
    return this.items.shift();
  }
  
  front() {
    return this.items[0];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // 10
