// index.js

// ===== Stack Class (Pure DSA, No JS push/pop) =====
class Stack {
  constructor(maxSize = 1000) {
    this.maxSize = maxSize;
    this.arr = new Array(maxSize);
    this.top = -1;
  }
  push(value) {
    if (this.top === this.maxSize - 1) {
      console.log("Stack overflow");
      return;
    }
    this.top++;
    this.arr[this.top] = value;
  }
  pop() {
    if (this.isEmpty()) {
      console.log("Stack underflow");
      return null;
    }
    const value = this.arr[this.top];
    this.top--;
    return value;
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.arr[this.top];
  }
  isEmpty() {
    return this.top === -1;
  }
  size() {
    return this.top + 1;
  }
}

// ===== Helper: Operator Precedence =====
function precedence(op) {
  if (op === "+" || op === "-") return 1;
  if (op === "*" || op === "/") return 2;
  if (op === "^") return 3;
  return 0;
}

function isOperator(ch) {
  return ["+", "-", "*", "/", "^"].includes(ch);
}

// ===== 1. Infix to Postfix =====
function infixToPostfix(exp) {
  let st = new Stack(exp.length);
  let result = "";

  for (let i = 0; i < exp.length; i++) {
    let c = exp[i];

    if (c === " ") continue;

    if (/[a-zA-Z0-9]/.test(c)) {
      result += c;
    } else if (c === "(") {
      st.push(c);
    } else if (c === ")") {
      while (!st.isEmpty() && st.peek() !== "(") {
        result += st.pop();
      }
      st.pop(); // remove '('
    } else {
      while (!st.isEmpty() && precedence(c) <= precedence(st.peek())) {
        result += st.pop();
      }
      st.push(c);
    }
  }
  while (!st.isEmpty()) {
    result += st.pop();
  }
  return result;
}

// ===== 2. Infix to Prefix =====
function infixToPrefix(exp) {
  let rev = exp
    .split("")
    .reverse()
    .map((ch) => {
      if (ch === "(") return ")";
      else if (ch === ")") return "(";
      return ch;
    })
    .join("");

  let postfix = infixToPostfix(rev);
  return postfix.split("").reverse().join("");
}

// ===== 3. Postfix to Infix =====
function postfixToInfix(exp) {
  let st = new Stack(exp.length);
  for (let i = 0; i < exp.length; i++) {
    let c = exp[i];
    if (/[a-zA-Z0-9]/.test(c)) {
      st.push(c);
    } else if (isOperator(c)) {
      let op2 = st.pop();
      let op1 = st.pop();
      let newExp = "(" + op1 + c + op2 + ")";
      st.push(newExp);
    }
  }
  return st.pop();
}

// ===== 4. Postfix to Prefix =====
function postfixToPrefix(exp) {
  let st = new Stack(exp.length);
  for (let i = 0; i < exp.length; i++) {
    let c = exp[i];
    if (/[a-zA-Z0-9]/.test(c)) {
      st.push(c);
    } else if (isOperator(c)) {
      let op2 = st.pop();
      let op1 = st.pop();
      let newExp = c + op1 + op2;
      st.push(newExp);
    }
  }
  return st.pop();
}

// ===== 5. Prefix to Infix =====
function prefixToInfix(exp) {
  let st = new Stack(exp.length);
  for (let i = exp.length - 1; i >= 0; i--) {
    let c = exp[i];
    if (/[a-zA-Z0-9]/.test(c)) {
      st.push(c);
    } else if (isOperator(c)) {
      let op1 = st.pop();
      let op2 = st.pop();
      let newExp = "(" + op1 + c + op2 + ")";
      st.push(newExp);
    }
  }
  return st.pop();
}

// ===== 6. Prefix to Postfix =====
function prefixToPostfix(exp) {
  let st = new Stack(exp.length);
  for (let i = exp.length - 1; i >= 0; i--) {
    let c = exp[i];
    if (/[a-zA-Z0-9]/.test(c)) {
      st.push(c);
    } else if (isOperator(c)) {
      let op1 = st.pop();
      let op2 = st.pop();
      let newExp = op1 + op2 + c;
      st.push(newExp);
    }
  }
  return st.pop();
}

// ===== Example Runs =====
let infixExp = "(A+B)*(C-D)";
console.log("Infix to Postfix:", infixToPostfix(infixExp));
console.log("Infix to Prefix:", infixToPrefix(infixExp));

let postfixExp = "AB+CD-*";
console.log("Postfix to Infix:", postfixToInfix(postfixExp));
console.log("Postfix to Prefix:", postfixToPrefix(postfixExp));

let prefixExp = "*+AB-CD";
console.log("Prefix to Infix:", prefixToInfix(prefixExp));
console.log("Prefix to Postfix:", prefixToPostfix(prefixExp));
