// TreeNode class represents
// a node in a binary tree
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  // Function to perform level-order
  // traversal of a binary tree
  levelOrder(root) {
    // Create an array to store levels
    let ans = [];
    if (!root) {
      // If the tree is empty,
      // return an empty array
      return ans;
    }

    // Create a queue to store
    // nodes for level-order traversal
    let q = [];
    // Push the root node to the queue
    q.push(root);

    while (q.length > 0) {
      // Get the size of the current level
      let size = q.length;
      // Create an array to store
      // nodes at the current level
      let level = [];

      for (let i = 0; i < size; i++) {
        // Get the front node in the queue
        let node = q.shift();
        // Store the node value
        // in the current level array
        level.push(node.val);

        // Enqueue the child
        // nodes if they exist
        if (node.left !== null) {
          q.push(node.left);
        }
        if (node.right !== null) {
          q.push(node.right);
        }
      }
      // Store the current level
      // in the answer array
      ans.push(level);
    }
    // Return the level-order
    // traversal of the tree
    return ans;
  }
}

// Function to print the
// elements of an array
function printArray(arr) {
  // Iterate through the
  // array and print each element
  for (let num of arr) {
    console.log(num + " ");
  }
  console.log("\n");
}

// Creating a sample binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Create an instance of the Solution class
let solution = new Solution();
// Perform level-order traversal
let result = solution.levelOrder(root);

console.log("Level Order Traversal of Tree: \n");

// Printing the level order traversal result
for (let level of result) {
  printArray(level);
}
