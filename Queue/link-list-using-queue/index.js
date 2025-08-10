class Node {
  constructor(data, link = null) {
    this.data = data;
    this.link = link;
  }
}

class Queue {
  front = null;
  rear = null;

  isempty() {
    return this.front == null;
  }

  enqueue(val) {
    const newer = new Node(val);
    if (this.front == null) {
      this.front = newer;
    } else {
      this.rear.link = newer;
    }
    this.rear = newer;
  }

  dequeue() {
    if (this.isempty()) {
      console.log("Queue is empty");
      return null;
    }
    let temp = this.front;
    let out = temp.data;
    this.front = this.front.link;
    if (this.front == null) {
      this.rear = null;
    }
    return out;
  }

  display() {
    let temp = this.front;
    while (temp != null) {
      process.stdout.write(temp.data + " ");
      temp = temp.link;
    }
    console.log();
  }
}

// Example usage
const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.display(); // 10 20 30
console.log("Dequeued:", q.dequeue()); // 10
q.display(); // 20 30
console.log("Is empty?", q.isempty()); // false
