// Node class for a binary tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// DFS Traversals
function preorder(root) {
  if (root === null) return;
  console.log(root.data); // Visit root
  preorder(root.left); // Traverse left
  preorder(root.right); // Traverse right
}

function inorder(root) {
  if (root === null) return;
  inorder(root.left); // Traverse left
  console.log(root.data); // Visit root
  inorder(root.right); // Traverse right
}

function postorder(root) {
  if (root === null) return;
  postorder(root.left); // Traverse left
  postorder(root.right); // Traverse right
  console.log(root.data); // Visit root
}

// Example Tree:
//       1
//      / \
//     2   3
//      \
//       5
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.right = new Node(5);

// Run traversals
console.log("Pre-order Traversal:");
preorder(root);

console.log("In-order Traversal:");
inorder(root);

console.log("Post-order Traversal:");
postorder(root);
