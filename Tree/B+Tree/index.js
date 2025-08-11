// Pure DSA JavaScript: B+ Tree (leaf-linked). Order = maximum children for internal node.
// We'll define 'order' as max number of children for internal nodes (so max keys = order - 1).
// For leaves, we keep up to leafCapacity keys for simplicity (often leafCapacity = order - 1).

class BPlusLeaf {
  constructor(leafCapacity) {
    this.keys = []; // keys stored in leaf
    this.next = null; // pointer to next leaf (for range queries)
    this.leafCapacity = leafCapacity;
  }

  isFull() {
    return this.keys.length > this.leafCapacity;
  }
}

class BPlusInternal {
  constructor(order) {
    this.keys = []; // separator keys
    this.children = []; // child pointers (internal or leaf)
    this.order = order;
  }

  isFull() {
    return this.children.length > this.order;
  }
}

class BPlusTree {
  constructor(order = 4) {
    // order = max children in internal node; typical choice 4 or 5
    this.order = order;
    this.leafCapacity = order - 1; // common choice
    this.root = new BPlusLeaf(this.leafCapacity);
  }

  // Find leaf node where key should be
  findLeaf(key) {
    let node = this.root;
    while (node instanceof BPlusInternal) {
      // find child index
      let i = 0;
      while (i < node.keys.length && key >= node.keys[i]) i++;
      node = node.children[i];
    }
    return node;
  }

  // Search for a key in tree (returns true if found or optionally the leaf)
  search(key) {
    const leaf = this.findLeaf(key);
    return leaf.keys.includes(key);
  }

  // Insert key (no separate value; value can be added easily)
  insert(key) {
    const leaf = this.findLeaf(key);
    // insert key in sorted position
    let i = 0;
    while (i < leaf.keys.length && leaf.keys[i] < key) i++;
    leaf.keys.splice(i, 0, key);

    // if leaf overflows, split
    if (leaf.keys.length > this.leafCapacity) {
      this.splitLeaf(leaf);
    }
  }

  // Split a leaf node
  splitLeaf(leaf) {
    const mid = Math.ceil(leaf.keys.length / 2);
    const rightKeys = leaf.keys.splice(mid); // remove right half into new leaf

    const newLeaf = new BPlusLeaf(this.leafCapacity);
    newLeaf.keys = rightKeys;
    newLeaf.next = leaf.next;
    leaf.next = newLeaf;

    // Now we must insert a separator into parent
    const sepKey = newLeaf.keys[0]; // first key of new leaf

    // If leaf was root, create new root (internal)
    if (this.root === leaf) {
      const newRoot = new BPlusInternal(this.order);
      newRoot.keys = [sepKey];
      newRoot.children = [leaf, newLeaf];
      this.root = newRoot;
      return;
    }

    // Else find parent and insert sepKey
    this.insertIntoParent(this.root, leaf, sepKey, newLeaf);
  }

  // helper to insert separator into parent — recursive search for parent
  insertIntoParent(node, leftChild, sepKey, rightChild) {
    // If node is leaf, we didn't find parent path, return (shouldn't happen)
    if (node instanceof BPlusLeaf) return;

    // If node's children contain leftChild, we are at parent
    let idx = node.children.indexOf(leftChild);
    if (idx !== -1) {
      // Insert sepKey and rightChild after idx
      node.keys.splice(idx, 0, sepKey);
      node.children.splice(idx + 1, 0, rightChild);

      // if overflow, split internal
      if (node.children.length > this.order) {
        this.splitInternal(node);
      }
      return;
    }

    // otherwise recurse into appropriate child
    let i = 0;
    while (i < node.keys.length && leftChild.keys[0] >= node.keys[i]) i++;
    this.insertIntoParent(node.children[i], leftChild, sepKey, rightChild);
  }

  splitInternal(node) {
    const midIndex = Math.floor(node.keys.length / 2);
    const sepKey = node.keys[midIndex];

    // Right node will have keys after midIndex
    const rightNode = new BPlusInternal(this.order);
    rightNode.keys = node.keys.splice(midIndex + 1); // keys after separator
    rightNode.children = node.children.splice(midIndex + 1);

    // left node's keys length will be midIndex
    node.keys.length = midIndex;

    // If node was root, create new root
    if (this.root === node) {
      const newRoot = new BPlusInternal(this.order);
      newRoot.keys = [sepKey];
      newRoot.children = [node, rightNode];
      this.root = newRoot;
      return;
    }

    // Otherwise, insert sepKey and rightNode into parent
    this.insertIntoParent(this.root, node, sepKey, rightNode);
  }

  // Range query: returns keys in [low, high]
  rangeQuery(low, high) {
    const result = [];
    // find first leaf where low could be
    let node = this.findLeaf(low);
    while (node) {
      for (const k of node.keys) {
        if (k >= low && k <= high) result.push(k);
        else if (k > high) return result;
      }
      node = node.next;
    }
    return result;
  }

  // Pretty print tree (simple)
  printTree() {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (node instanceof BPlusInternal) {
        console.log("Internal keys:", node.keys);
        for (const ch of node.children) queue.push(ch);
      } else {
        console.log("Leaf keys:", node.keys);
      }
    }
  }
}

// ========== Example B+ usage ==========
const bpt = new BPlusTree(4); // order 4
[10, 20, 5, 6, 12, 30, 7, 17].forEach((v) => bpt.insert(v));

console.log("B+ Tree structure:");
bpt.printTree();

console.log("Search 6 ->", bpt.search(6));
console.log("Range [6, 17] ->", bpt.rangeQuery(6, 17));
