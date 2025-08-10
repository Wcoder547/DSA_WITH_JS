//=======================================================
//                  INSERTION & DELETION
//=======================================================

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
//Print complete Link-list
function printLL(head) {
  let current = head;
  while (current != null) {
    process.stdout.write(current.data + " ");
    current = current.next;
  }
  console.log();
}
//insertAtHead
function insertHead(head, val) {
  return new Node(val, head);
}
//insertTail
function insertTail(head, val) {
  if (head == null) {
    return new Node(val);
  }
  let temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }
  const newNode = new Node(val);
  temp.next = newNode;
  return head;
}

//insertKthPosition
function insertKPosition(head, el, k) {
  if (k === 1) {
    return new Node(el, head);
  }
  if (head == null) return null;

  let count = 1;
  let temp = head;
  while (temp != null && count < k - 1) {
    temp = temp.next;
    count++;
  }
  if (temp == null) return head; // position out of bounds

  temp.next = new Node(el, temp.next);
  return head;
}
//search the key
function search(head, key) {
  let temp = head;
  while (temp != null) {
    if (temp.data == key) {
      return true;
    }
    temp = temp.next;
  }
  return false;
}
//add-after
function addAfter(head, sval, val) {
  let temp = head;
  while (temp != null && temp.data != sval) {
    temp = temp.next;
  }

  if (temp != null) {
    const newer = new Node(val, temp.next);
    temp.next = newer;
    console.log("addAfter: inserted " + val + " after " + sval);
  } else {
    console.log("sval not found!!");
  }

  return head;
}

//==========================
//        DELETION
//===========================

//delete head
function deleteHead(head) {
  let temp = head;
  head = head.next;
  delete temp;
  return head;
}

//delete tail
function deleteTail(head) {
  if (head == null || head.next == null) {
    return null;
  }
  let temp = head;
  while (temp.next.next != null) {
    temp = temp.next;
  }
  delete temp.next;
  temp.next = null;
  return head;
}

//delete k-th position
function deleteKPosition(head, k) {
  if (head == null) {
    return head;
  }

  if (k == 1) {
    let temp = head;
    head = head.next;
    delete temp;
    return head;
  }

  let count = 1;
  let temp = head;
  let prev = null;

  while (temp != null && count < k) {
    prev = temp;
    temp = temp.next;
    count++;
  }

  if (temp != null) {
    prev.next = temp.next;
    delete temp;
  }

  return head;
}

const arr = [12, 8, 5, 7];
const val = 100;
const tailValue = 200;

let head = new Node(arr[0]);
head.next = new Node(arr[1]);
head.next.next = new Node(arr[2]);
head.next.next.next = new Node(arr[3]);

for (let i = 0; i < arr.length; i++) {}

head = insertHead(head, val);
head = insertTail(head, tailValue);
head = insertKPosition(head, 300, 3); // adds 300 at position 3
if (search(head, 8)) {
  console.log("Found!");
} else {
  console.log("Not found!");
}
head = addAfter(head, 8, 500);
head = deleteHead(head);
head = deleteTail(head);
head = deleteKPosition(head, 3);
printLL(head);
