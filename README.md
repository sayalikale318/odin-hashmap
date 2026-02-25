# HashMap Implementation (JavaScript)
This project is a custom implementation of a HashMap data structure built from scratch in JavaScript.
The goal is to understand how hash tables work internally, including hashing, collision handling, resizing, and load factor management.

---

## 🚀 Project Overview
This HashMap:
- Uses an array of buckets
- Handles collisions using separate chaining
- Resizes automatically when the load factor is exceeded
- Supports core HashMap operations similar to built-in data structures

---

## 🛠️ Features Implemented
- Custom hash function
- `set(key, value)`
- `get(key)`
- `has(key)`
- `remove(key)`
- `length()`
- `clear()`
- `keys()`
- `values()`
- `entries()`
- Automatic resizing when load factor exceeds 0.75
- String-only keys enforcement

---

## 📂 Project Structure
```

hashmap-project
│── index.html
│── hashmap.js
│── README.md

````

---

## ⚙️ How It Works
### 1️⃣ Hash Function
A polynomial rolling hash algorithm is used with a prime number (31).  
Modulo is applied during each iteration to prevent integer overflow.

### 2️⃣ Buckets
- The HashMap stores data inside an array of buckets.
- Each bucket contains an array of `[key, value]` pairs.
- This technique is called **separate chaining**.

### 3️⃣ Load Factor
- Default load factor: `0.75`
- Default initial capacity: `16`
- When `size / capacity > 0.75`, the map resizes (capacity doubles).
- All existing entries are rehashed into new buckets.

---

## ▶️ How to Run
### Option 1: In Browser
1. Open `index.html`
2. Open Developer Tools
3. Go to the Console tab
4. View test outputs

### Option 2: Using Node.js
```bash
node hashmap.js
````

---

## 🧪 Example Usage
```javascript
const map = new HashMap();

map.set("apple", "red");
map.set("banana", "yellow");

console.log(map.get("apple"));   // red
console.log(map.has("banana"));  // true
console.log(map.length());       // 2
```

---

## 📚 What I Learned
* How hashing works internally
* Why collisions occur
* How to handle collisions with separate chaining
* How resizing affects performance
* Load factor management
* Rehashing during capacity growth
* Implementing core data structure methods manually

---

## 🔄 Future Improvements
* Implement open addressing
* Add performance benchmarking
* Create a HashSet version
* Add visualization for buckets

---

Built as part of a Data Structures learning project.

---

After adding it:
bash
git add README.md
git commit -m "Add project README"
git push
