class HashTable {
  constructor(size = 7) {
    this.data = new Array(size); // fixed size
  }

  // Simple hash function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // Insert key-value pair
  set(key, value) {
    const index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]); // chaining
  }

  // Retrieve value
  get(key) {
    const index = this._hash(key);
    const bucket = this.data[index];
    if (bucket) {
      for (let [k, v] of bucket) {
        if (k === key) return v;
      }
    }
    return undefined;
  }

  // Get all keys
  keys() {
    let keysArr = [];
    for (let bucket of this.data) {
      if (bucket) {
        for (let [k] of bucket) {
          keysArr.push(k);
        }
      }
    }
    return keysArr;
  }
}

// Example usage:
const ht = new HashTable();
ht.set("grapes", 100);
ht.set("apples", 54);
ht.set("oranges", 200);

console.log(ht.get("apples")); // 54
console.log(ht.get("grapes")); // 100
console.log(ht.keys()); // ['grapes', 'apples', 'oranges']
