// Pure DSA JavaScript: Full B-Tree (insert + delete + search + traverse)

class BTreeNode {
  constructor(t, leaf = false) {
    this.t = t; // minimum degree
    this.leaf = leaf; // is leaf
    this.keys = []; // keys array
    this.children = []; // children pointers
  }

  // Traverse subtree rooted with this node (in-order-ish)
  traverse() {
    let i;
    for (i = 0; i < this.keys.length; i++) {
      if (!this.leaf) this.children[i].traverse();
      console.log(this.keys[i]);
    }
    if (!this.leaf) this.children[i].traverse();
  }

  // Search key k in subtree rooted with this node
  search(k) {
    let i = 0;
    while (i < this.keys.length && k > this.keys[i]) i++;
    if (i < this.keys.length && this.keys[i] === k) return this;
    if (this.leaf) return null;
    return this.children[i].search(k);
  }

  // Insert a key into a non-full node
  insertNonFull(k) {
    let i = this.keys.length - 1;

    if (this.leaf) {
      // insert into leaf in sorted order
      while (i >= 0 && this.keys[i] > k) {
        i--;
      }
      this.keys.splice(i + 1, 0, k);
    } else {
      // find child to descend
      while (i >= 0 && this.keys[i] > k) i--;
      i++;
      // if the child is full, split it
      if (this.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(i, this.children[i]);
        // after split, the middle key moved up; decide which of the two children to descend
        if (this.keys[i] < k) i++;
      }
      this.children[i].insertNonFull(k);
    }
  }

  // Split the child y of this node at index i
  splitChild(i, y) {
    const t = this.t;
    const z = new BTreeNode(t, y.leaf);

    // z will take last t-1 keys of y
    for (let j = 0; j < t - 1; j++) {
      z.keys[j] = y.keys[j + t];
    }

    // If y is not leaf, move last t children of y to z
    if (!y.leaf) {
      for (let j = 0; j < t; j++) {
        z.children[j] = y.children[j + t];
      }
      // remove moved children from y
      y.children.length = t; // keep first t children (0..t-1)
    }

    // reduce the number of keys in y
    y.keys.length = t - 1;

    // Insert new child z to this node
    this.children.splice(i + 1, 0, z);

    // Move middle key of y up to this node
    this.keys.splice(i, 0, y.keys[t - 1]); // but y.keys[t-1] was removed by length truncation? careful

    // NOTE: because we truncated y.keys to length t-1, referencing y.keys[t-1] above would be undefined.
    // So we must capture middle before truncating. We'll fix by re-implementing correctly below.
  }

  // We'll replace splitChild with a correct implementation below (outside class for clarity)
}

// Correct splitChild function attached to prototype (replacing the previous one)
BTreeNode.prototype.splitChild = function (i, y) {
  const t = this.t;
  const z = new BTreeNode(t, y.leaf);

  // copy last t-1 keys of y to z
  for (let j = 0; j < t - 1; j++) {
    z.keys[j] = y.keys[j + t];
  }

  // if y is not leaf, copy last t children
  if (!y.leaf) {
    for (let j = 0; j < t; j++) {
      z.children[j] = y.children[j + t];
    }
  }

  // middle key to be moved up
  const midKey = y.keys[t - 1];

  // reduce y's keys and children
  y.keys.length = t - 1;
  if (!y.leaf) y.children.length = t;

  // insert z as child of this node
  this.children.splice(i + 1, 0, z);

  // insert midKey to this.keys at position i
  this.keys.splice(i, 0, midKey);
};

// ===== Removal helpers on BTreeNode.prototype =====

// Find index of first key >= k
BTreeNode.prototype.findKeyIndex = function (k) {
  let idx = 0;
  while (idx < this.keys.length && this.keys[idx] < k) idx++;
  return idx;
};

// Remove a key from subtree rooted with this node
BTreeNode.prototype.remove = function (k) {
  const idx = this.findKeyIndex(k);

  // If the key is present in this node
  if (idx < this.keys.length && this.keys[idx] === k) {
    if (this.leaf) {
      // If this is a leaf node - remove key
      this.keys.splice(idx, 1);
    } else {
      // If this node is an internal node
      this.removeFromNonLeaf(idx);
    }
  } else {
    // If this node is a leaf and key not found
    if (this.leaf) {
      // Key not present in tree
      return;
    }

    // Flag indicates if the key is present in the subtree rooted with last child
    let flag = idx === this.keys.length;

    // If the child where the key is supposed to exist has less than t keys, fill it
    if (this.children[idx].keys.length < this.t) {
      this.fill(idx);
    }

    // After fill, either the child at idx or idx-1 may have the key
    if (flag && idx > this.keys.length) {
      this.children[idx - 1].remove(k);
    } else {
      this.children[idx].remove(k);
    }
  }
};

// Remove key from an internal node at index idx
BTreeNode.prototype.removeFromNonLeaf = function (idx) {
  const k = this.keys[idx];

  // If the child that precedes k (children[idx]) has >= t keys
  if (this.children[idx].keys.length >= this.t) {
    const pred = this.getPredecessor(idx);
    this.keys[idx] = pred;
    this.children[idx].remove(pred);
  }
  // If the child that succeeds k (children[idx+1]) has >= t keys
  else if (this.children[idx + 1].keys.length >= this.t) {
    const succ = this.getSuccessor(idx);
    this.keys[idx] = succ;
    this.children[idx + 1].remove(succ);
  }
  // If both children[idx] and children[idx+1] have < t keys, merge them
  else {
    this.merge(idx);
    this.children[idx].remove(k);
  }
};

BTreeNode.prototype.getPredecessor = function (idx) {
  // Move to the rightmost node in children[idx]
  let cur = this.children[idx];
  while (!cur.leaf) cur = cur.children[cur.keys.length];
  return cur.keys[cur.keys.length - 1];
};

BTreeNode.prototype.getSuccessor = function (idx) {
  // Move to the leftmost node in children[idx+1]
  let cur = this.children[idx + 1];
  while (!cur.leaf) cur = cur.children[0];
  return cur.keys[0];
};

// Fill child children[idx] which has less than t-1 keys
BTreeNode.prototype.fill = function (idx) {
  if (idx !== 0 && this.children[idx - 1].keys.length >= this.t) {
    this.borrowFromPrev(idx);
  } else if (
    idx !== this.keys.length &&
    this.children[idx + 1].keys.length >= this.t
  ) {
    this.borrowFromNext(idx);
  } else {
    if (idx !== this.keys.length) this.merge(idx);
    else this.merge(idx - 1);
  }
};

// Borrow a key from children[idx-1] and insert into children[idx]
BTreeNode.prototype.borrowFromPrev = function (idx) {
  const child = this.children[idx];
  const sibling = this.children[idx - 1];

  // Move this.keys[idx-1] down to child
  child.keys.splice(0, 0, this.keys[idx - 1]);

  // If child not leaf, move last child of sibling as first child of child
  if (!child.leaf) {
    child.children.splice(0, 0, sibling.children.pop());
  }

  // Move sibling's last key up to this.keys[idx-1]
  this.keys[idx - 1] = sibling.keys.pop();
};

// Borrow a key from children[idx+1] and insert into children[idx]
BTreeNode.prototype.borrowFromNext = function (idx) {
  const child = this.children[idx];
  const sibling = this.children[idx + 1];

  // this.keys[idx] moves down as last key of child
  child.keys.push(this.keys[idx]);

  // if child is not leaf, move sibling's first child as last child of child
  if (!child.leaf) {
    child.children.push(sibling.children.shift());
  }

  // first key of sibling moves up to this.keys[idx]
  this.keys[idx] = sibling.keys.shift();
};

// Merge child at idx with child at idx+1 (move keys and children)
BTreeNode.prototype.merge = function (idx) {
  const child = this.children[idx];
  const sibling = this.children[idx + 1];
  const t = this.t;

  // Pull down key[idx] to child
  child.keys.push(this.keys[idx]);

  // Append sibling's keys to child
  for (let i = 0; i < sibling.keys.length; i++) {
    child.keys.push(sibling.keys[i]);
  }

  // Append sibling's children if any
  if (!child.leaf) {
    for (let i = 0; i < sibling.children.length; i++) {
      child.children.push(sibling.children[i]);
    }
  }

  // Remove key and sibling from this node
  this.keys.splice(idx, 1);
  this.children.splice(idx + 1, 1);
};

// ================= BTree wrapper =================
class BTree {
  constructor(t) {
    this.t = t;
    this.root = null;
  }

  traverse() {
    if (this.root !== null) this.root.traverse();
  }

  search(k) {
    return this.root == null ? null : this.root.search(k);
  }

  insert(k) {
    if (this.root == null) {
      this.root = new BTreeNode(this.t, true);
      this.root.keys.push(k);
      return;
    }

    // If root is full, tree grows in height
    if (this.root.keys.length === 2 * this.t - 1) {
      const s = new BTreeNode(this.t, false);
      s.children[0] = this.root;
      s.splitChild(0, this.root);

      // New root has two children; decide which to insert into
      let i = 0;
      if (s.keys[0] < k) i++;
      s.children[i].insertNonFull(k);
      this.root = s;
    } else {
      this.root.insertNonFull(k);
    }
  }

  remove(k) {
    if (!this.root) return;

    this.root.remove(k);

    // If the root has 0 keys, make its first child the new root
    if (this.root.keys.length === 0) {
      if (this.root.leaf) {
        this.root = null;
      } else {
        this.root = this.root.children[0];
      }
    }
  }
}

// ========== Example Usage ==========
const t = 2; // minimum degree
const tree = new BTree(t);
const values = [10, 20, 5, 6, 12, 30, 7, 17];

for (const v of values) tree.insert(v);

console.log("B-Tree traversal after inserts:");
tree.traverse();

// search
console.log("Search 6 =>", tree.search(6) ? "Found" : "Not Found");
console.log("Search 15 =>", tree.search(15) ? "Found" : "Not Found");

// remove examples
tree.remove(6);
console.log("After removing 6:");
tree.traverse();

tree.remove(13); // not present -> safe
tree.remove(7);
tree.remove(4);
console.log("After further removals:");
tree.traverse();
