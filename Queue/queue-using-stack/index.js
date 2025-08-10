// queueUsingStacks.js

class QueueUsingStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  // Enqueue element into the queue
  enqueue(value) {
    this.stack1.push(value);
  }

  // Dequeue element from the queue
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    // If stack2 is empty, transfer all from stack1
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }

  // Peek at the front element
  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2[this.stack2.length - 1];
  }

  // Check if queue is empty
  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  // Get size of queue
  size() {
    return this.stack1.length + this.stack2.length;
  }
}

// Example usage
const q = new QueueUsingStacks();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log("Front:", q.front()); // 10
console.log("Dequeued:", q.dequeue()); // 10
console.log("Front after dequeue:", q.front()); // 20
console.log("Size:", q.size());
