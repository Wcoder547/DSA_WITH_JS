class Node {
  constructor(data, link = null) {
    this.data = data;
    this.link = link;
  }
}

class Stack {
  top = null;

  isempty() {
    return this.top == null;
  }

  push(val) {
    const newer = new Node(val, this.top);
    this.top = newer;
  }

  pop() {
    if (this.isempty()) {
      console.log("Stack is empty");
      return null;
    }
    let temp = this.top;
    const out = temp.data;
    this.top = this.top.link;
    return out;
  }

  display() {
    let temp = this.top;
    while (temp != null) {
      process.stdout.write(temp.data + " ");
      temp = temp.link;
    }
    console.log();
  }
}

const stk = new Stack();
stk.push(5);
stk.push(10);
stk.push(15);
stk.push(20);

console.log("Popped:", stk.pop()); // Popped: 20
stk.display(); // 15 10 5
console.log("Is empty?", stk.isempty()); // false
