// queueUsingArray.js
class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.arr = new Array(maxSize); // fixed-size array
    this.front = 0;
    this.rear = -1;
    this.size = 0;
  }

  // Insert element at rear
  enqueue(element) {
    if (this.size === this.maxSize) {
      console.log("Queue is full");
      return;
    }
    this.rear++;
    this.arr[this.rear] = element;
    this.size++;
    console.log("Enqueued:", element);
  }

  // Remove element from front
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    const removed = this.arr[this.front];
    this.front++;
    this.size--;
    return removed;
  }

  // Get the front element
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.arr[this.front];
  }

  // Check if queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get queue size
  getSize() {
    return this.size;
  }

  // Print queue elements
  print() {
    let result = "";
    for (let i = this.front; i <= this.rear; i++) {
      result += this.arr[i] + " ";
    }
    console.log(result.trim());
  }
}

// Example usage
const q = new Queue(10);
q.enqueue(4);
q.enqueue(14);
q.enqueue(24);
q.enqueue(34);

console.log("Front element:", q.peek());
console.log("Size before dequeue:", q.getSize());
console.log("Dequeued element:", q.dequeue());
console.log("Front after dequeue:", q.peek());
console.log("Size after dequeue:", q.getSize());
q.print();
