class Node {
  constructor(data, link = null) {
    this.data = data;
    this.link = link;
  }
}

class cQueue {
  rear = null;

  enqueu(val) {
    const newer = new Node(val);
    if (this.rear === null) {
      this.rear = newer;
      newer.link = newer; // first element points to itself
    } else {
      newer.link = this.rear.link;
      this.rear.link = newer;
      this.rear = newer;
    }
  }

  dequeue() {
    if (this.rear === null) {
      console.log("Queue is empty");
      return null;
    }

    let front = this.rear.link;
    let out = front.data;

    if (this.rear === front) {
      // only one element
      this.rear = null;
    } else {
      this.rear.link = front.link;
    }
    return out;
  }

  display() {
    if (this.rear === null) {
      console.log("Queue is empty");
      return;
    }
    let temp = this.rear.link;
    do {
      process.stdout.write(temp.data + " ");
      temp = temp.link;
    } while (temp !== this.rear.link);
    console.log();
  }
}

// Test
const eq = new cQueue();
eq.enqueu(5);
eq.enqueu(10);
eq.enqueu(15);
eq.enqueu(20);

eq.display(); // 5 10 15 20
console.log("Dequeued:", eq.dequeue());
eq.display(); // 10 15 20
