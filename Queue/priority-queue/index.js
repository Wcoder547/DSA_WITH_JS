class Node {
  constructor(data, priority, next = null) {
    this.data = data;
    this.priority = priority;
    this.next = next;
  }
}

class PriorityQueue {
  front = null; // Front of the queue (highest priority element)

  isEmpty() {
    return this.front === null;
  }

  enqueue(data, priority) {
    const newer = new Node(data, priority);

    // If queue empty or new node has higher priority (smaller number)
    if (this.isEmpty() || priority < this.front.priority) {
      newer.next = this.front;
      this.front = newer;
    } else {
      // Traverse to find correct position
      let temp = this.front;
      while (temp.next !== null && temp.next.priority <= priority) {
        temp = temp.next;
      }
      newer.next = temp.next;
      temp.next = newer;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    let out = this.front.data;
    this.front = this.front.next;
    return out;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let temp = this.front;
    while (temp !== null) {
      process.stdout.write(`(${temp.data}, P:${temp.priority}) `);
      temp = temp.next;
    }
    console.log();
  }
}

// Test
const pq = new PriorityQueue();
console.log("Empty?", pq.isEmpty()); // true

pq.enqueue("Task A", 2);
pq.enqueue("Task B", 1);
pq.enqueue("Task C", 3);
pq.enqueue("Task D", 1);

pq.display(); // (Task B, P:1) (Task D, P:1) (Task A, P:2) (Task C, P:3)
console.log("Empty?", pq.isEmpty()); // false

console.log("Dequeued:", pq.dequeue());
pq.display();
