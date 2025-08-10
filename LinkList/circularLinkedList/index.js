// circularLinkedList.js

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a node at the end
  insertAtTail(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.head; // circular link
      return;
    }

    let temp = this.head;
    while (temp.next !== this.head) {
      temp = temp.next;
    }
    temp.next = newNode;
    newNode.next = this.head;
  }

  // Insert a node at the beginning
  insertAtHead(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let temp = this.head;
    while (temp.next !== this.head) {
      temp = temp.next;
    }

    newNode.next = this.head;
    temp.next = newNode;
    this.head = newNode;
  }

  // Delete a node with a specific value
  deleteNode(key) {
    if (this.head === null) return;

    let current = this.head;
    let prev = null;

    // If head node itself holds the key
    if (current.data === key) {
      // Only one node case
      if (current.next === this.head) {
        this.head = null;
        return;
      }

      // Find last node
      let last = this.head;
      while (last.next !== this.head) {
        last = last.next;
      }
      last.next = current.next;
      this.head = current.next;
      return;
    }

    // Search for the key
    do {
      prev = current;
      current = current.next;
    } while (current !== this.head && current.data !== key);

    if (current.data === key) {
      prev.next = current.next;
    }
  }

  // Search for a value
  search(key) {
    if (this.head === null) return false;

    let temp = this.head;
    do {
      if (temp.data === key) return true;
      temp = temp.next;
    } while (temp !== this.head);

    return false;
  }

  // Display the circular linked list
  display() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    let temp = this.head;
    let output = "";
    do {
      output += temp.data + " ";
      temp = temp.next;
    } while (temp !== this.head);

    console.log(output.trim());
  }
}

// Example usage:
const cll = new CircularLinkedList();
cll.insertAtTail(10);
cll.insertAtTail(20);
cll.insertAtTail(30);
cll.insertAtHead(5);
console.log("Circular Linked List:");
cll.display();

console.log("Search 20:", cll.search(20));
console.log("Search 50:", cll.search(50));

cll.deleteNode(20);
console.log("After deleting 20:");
cll.display();
