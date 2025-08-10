// Doubly Linked List Node
class Node {
  constructor(data, next = null, back = null) {
    this.data = data;
    this.next = next;
    this.back = back;
  }
}

// Convert array to doubly linked list
function convertArr2DLL(arr) {
  if (arr.length === 0) return null;
  let head = new Node(arr[0]);
  let prev = head;

  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }
  return head;
}

// Display DLL forward
function print(head) {
  let temp = head;
  let output = "";
  while (temp !== null) {
    output += temp.data + " ";
    temp = temp.next;
  }
  console.log(output.trim());
}

// Insert before head
function insertBeforeHead(head, k) {
  let newNode = new Node(k, head, null);
  if (head) head.back = newNode;
  return newNode; // new head
}

// Insert at tail
function insertAtTail(head, k) {
  let newNode = new Node(k);
  if (head === null) return newNode;

  let tail = head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = newNode;
  newNode.back = tail;
  return head;
}

// Insert at Kth position (1-indexed)
function insertAtKthElement(head, k, value) {
  if (k <= 1) return insertBeforeHead(head, value);

  let temp = head;
  let count = 1;
  while (temp !== null && count < k) {
    temp = temp.next;
    count++;
  }
  if (temp === null) return insertAtTail(head, value);

  let prevNode = temp.back;
  let newNode = new Node(value, temp, prevNode);
  if (prevNode) prevNode.next = newNode;
  temp.back = newNode;
  return head;
}

// Insert before a specific value
function insertBeforeNode(head, targetValue, value) {
  if (head === null) return null;
  if (head.data === targetValue) return insertBeforeHead(head, value);

  let temp = head;
  while (temp !== null && temp.data !== targetValue) {
    temp = temp.next;
  }
  if (!temp) return head;

  let prevNode = temp.back;
  let newNode = new Node(value, temp, prevNode);
  if (prevNode) prevNode.next = newNode;
  temp.back = newNode;
  return head;
}

// Reverse DLL
function reverseDLL(head) {
  if (head === null || head.next === null) return head;

  let current = head;
  let temp = null;
  while (current !== null) {
    temp = current.back;
    current.back = current.next;
    current.next = temp;
    current = current.back;
  }
  if (temp !== null) head = temp.back;
  return head;
}

// Delete head
function deleteHead(head) {
  if (head === null) return null;
  let nextNode = head.next;
  if (nextNode) nextNode.back = null;
  return nextNode;
}

// Delete tail
function deleteTail(head) {
  if (head === null || head.next === null) return null;

  let tail = head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  let prevNode = tail.back;
  prevNode.next = null;
  return head;
}

// Delete Kth element
function deleteKthElement(head, k) {
  if (k <= 1) return deleteHead(head);

  let temp = head;
  let count = 1;
  while (temp !== null && count < k) {
    temp = temp.next;
    count++;
  }
  if (!temp) return head; // k out of range

  let prevNode = temp.back;
  let nextNode = temp.next;
  if (prevNode) prevNode.next = nextNode;
  if (nextNode) nextNode.back = prevNode;
  return head;
}

// Delete by value
function deleteByValue(head, value) {
  if (!head) return null;
  if (head.data === value) return deleteHead(head);

  let temp = head;
  while (temp !== null && temp.data !== value) {
    temp = temp.next;
  }
  if (!temp) return head;

  let prevNode = temp.back;
  let nextNode = temp.next;
  if (prevNode) prevNode.next = nextNode;
  if (nextNode) nextNode.back = prevNode;
  return head;
}

// ======================
// Example Usage
// ======================
let arr = [12, 5, 8, 7, 4];
let head = convertArr2DLL(arr);

console.log("Initial DLL:");
print(head);

head = insertBeforeHead(head, 100);
console.log("After insertBeforeHead(100):");
print(head);

head = insertAtTail(head, 200);
console.log("After insertAtTail(200):");
print(head);

head = insertAtKthElement(head, 3, 300);
console.log("After insertAtKthElement(3, 300):");
print(head);

head = insertBeforeNode(head, 8, 400);
console.log("After insertBeforeNode(8, 400):");
print(head);

head = reverseDLL(head);
console.log("After reverseDLL:");
print(head);

head = deleteHead(head);
console.log("After deleteHead:");
print(head);

head = deleteTail(head);
console.log("After deleteTail:");
print(head);

head = deleteKthElement(head, 3);
console.log("After deleteKthElement(3):");
print(head);

head = deleteByValue(head, 8);
console.log("After deleteByValue(8):");
print(head);
