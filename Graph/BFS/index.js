class Solution {
  // Function to return Breadth First Traversal of given graph
  bfsOfGraph(V, adj) {
    let vis = new Array(V).fill(0); // visited array
    vis[0] = 1;

    let queue = []; // queue for BFS
    queue.push(0);

    let bfs = [];

    // iterate till the queue is empty
    while (queue.length > 0) {
      let node = queue.shift(); // dequeue front element
      bfs.push(node);

      // traverse for all its neighbours
      for (let i = 0; i < adj[node].length; i++) {
        let it = adj[node][i];
        if (!vis[it]) {
          vis[it] = 1;
          queue.push(it);
        }
      }
    }

    return bfs;
  }
}

// Function to add an undirected edge
function addEdge(adj, u, v) {
  adj[u].push(v);
  adj[v].push(u);
}

// Function to print the answer
function printAns(ans) {
  let output = "";
  for (let i = 0; i < ans.length; i++) {
    output += ans[i] + " ";
  }
  console.log(output.trim());
}

// Driver code
(function main() {
  let V = 6; // number of vertices
  let adj = new Array(V);
  for (let i = 0; i < V; i++) adj[i] = [];

  addEdge(adj, 0, 1);
  addEdge(adj, 1, 2);
  addEdge(adj, 1, 3);
  addEdge(adj, 0, 4);

  let obj = new Solution();
  let ans = obj.bfsOfGraph(5, adj);
  printAns(ans);
})();
