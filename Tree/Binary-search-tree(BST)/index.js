// Definition of TreeNode structure
// for a binary tree node
class TreeNode {
  // Value of the node
  constructor(val) {
    this.val = val;
    // Pointer to the left child node
    this.left = null;
    // Pointer to the right child node
    this.right = null;
  }
}

class Solution {
  // This function searches for a node with a
  // specified value in a Binary Search Tree (BST).
  searchBST(root, val) {
    // Loop until either the tree is
    // exhausted (null) or the value is found.
    while (root !== null && root.val !== val) {
      // Check if the target value is less
      // than the current node's value.
      // If so, move to the left subtree
      // (values smaller than the current node).
      // Otherwise, move to the right subtree
      // (values larger than the current node).
      root = val < root.val ? root.left : root.right;
    }
    // Return the node containing the target value,
    // if found; otherwise, return null.
    return root;
  }
}

// Function to perform an in-order traversal
// of a binary tree and print its nodes
function printInOrder(root) {
  // Check if the current node is
  // null (base case for recursion)
  if (root === null) {
    // If null, return
    // and terminate the function
    return;
  }

  // Recursively call printInOrder
  // for the left subtree
  printInOrder(root.left);

  // Print the value of the current node
  console.log(root.val);

  // Recursively call printInOrder
  // for the right subtree
  printInOrder(root.right);
}

// Creating a BST
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(10);

console.log("Binary Search Tree: ");
printInOrder(root);

let solution = new Solution();

// Searching for a value in the BST
let target = 6;
let result = solution.searchBST(root, target);

// Displaying the search result
if (result !== null) {
  console.log(`Value ${target} found in the BST!`);
} else {
  console.log(`Value ${target} not found in the BST.`);
}
