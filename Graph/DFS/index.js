class Solution {
  // Helper DFS function
  dfs(node, adj, vis, ls) {
    vis[node] = 1;
    ls.push(node);

    // traverse all its neighbours
    for (let i = 0; i < adj[node].length; i++) {
      let it = adj[node][i];
      if (!vis[it]) {
        this.dfs(it, adj, vis, ls);
      }
    }
  }

  // Function to return DFS traversal
  dfsOfGraph(V, adj) {
    let vis = new Array(V).fill(0);
    let start = 0;
    let ls = [];

    this.dfs(start, adj, vis, ls);
    return ls;
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
  let V = 5; // number of vertices
  let adj = new Array(V);
  for (let i = 0; i < V; i++) adj[i] = [];

  addEdge(adj, 0, 2);
  addEdge(adj, 2, 4);
  addEdge(adj, 0, 1);
  addEdge(adj, 0, 3);

  let obj = new Solution();
  let ans = obj.dfsOfGraph(V, adj);
  printAns(ans);
})();
