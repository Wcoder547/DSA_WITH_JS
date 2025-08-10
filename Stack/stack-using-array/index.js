class Stack {
  constructor() {
    this.size = 1000;
    this.arr = new Array(this.size);
    this.top = -1;
  }

  push(x) {
    this.top++;
    this.arr[this.top] = x;
  }

  pop() {
    if (this.top < 0) {
      throw new Error("Stack Underflow");
    }
    const x = this.arr[this.top];
    this.top--;
    return x;
  }

  Top() {
    if (this.top < 0) {
      throw new Error("Stack is empty");
    }
    return this.arr[this.top];
  }

  Size() {
    return this.top + 1;
  }
}

// Example usage
const s = new Stack();
s.push(6);
s.push(3);
s.push(7);

console.log("Top of stack before deleting any element:", s.Top());
console.log("Size of stack before deleting any element:", s.Size());
console.log("The element deleted is:", s.pop());
console.log("Size of stack after deleting an element:", s.Size());
console.log("Top of stack after deleting an element:", s.Top());
