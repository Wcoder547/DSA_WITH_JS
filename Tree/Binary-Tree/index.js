// Node class for a binary tree node
class Node {
  constructor(data) {
    this.data = data; // value of the node
    this.left = null; // left child
    this.right = null; // right child
  }
}

// Example usage: creating the binary tree

// Create root node with value 1
const root = new Node(1);

// Create left and right children of root
root.left = new Node(2);
root.right = new Node(3);

// Create right child for left child of root
root.left.right = new Node(5);

// If you want, you can log or traverse the tree here
console.log(root);
