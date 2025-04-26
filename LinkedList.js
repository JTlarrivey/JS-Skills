// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the beginning
  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Remove the first node
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  // Print the list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage
const list = new LinkedList();
list.insertFirst('third');
list.insertFirst('second');
list.insertFirst('first');

list.print();
// Output:
// first
// second
// third

list.removeFirst();
list.print();
// Output:
// second
// third
