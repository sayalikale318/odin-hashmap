class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = new Array(capacity).fill(null).map(() => []);
    this.size = 0;
  }

  // Hash function
  hash(key) {
    if (typeof key !== "string") {
      throw new Error("Keys must be strings");
    }

    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  // Add or update
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  // Get value
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return null;
  }

  // Check existence
  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        return true;
      }
    }

    return false;
  }

  // Remove key
  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  // Number of stored keys
  length() {
    return this.size;
  }

  // Clear all
  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  // Return all keys
  keys() {
    const result = [];

    for (let bucket of this.buckets) {
      for (let pair of bucket) {
        result.push(pair[0]);
      }
    }

    return result;
  }

  // Return all values
  values() {
    const result = [];

    for (let bucket of this.buckets) {
      for (let pair of bucket) {
        result.push(pair[1]);
      }
    }

    return result;
  }

  // Return all entries
  entries() {
    const result = [];

    for (let bucket of this.buckets) {
      for (let pair of bucket) {
        result.push(pair);
      }
    }

    return result;
  }

  // Resize and rehash
  resize() {
    const oldBuckets = this.buckets;

    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;

    for (let bucket of oldBuckets) {
      for (let pair of bucket) {
        this.set(pair[0], pair[1]);
      }
    }
  }
}

//////////////////////////////////////////////////////////
// TESTING SECTION
//////////////////////////////////////////////////////////

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("Length:", test.length());
console.log("Keys:", test.keys());
console.log("Values:", test.values());
console.log("Entries:", test.entries());

// Trigger resize
test.set("moon", "silver");

console.log("After resize length:", test.length());

test.remove("dog");
console.log("After remove:", test.entries());

console.log("Has apple?", test.has("apple"));
console.log("Get apple:", test.get("apple"));