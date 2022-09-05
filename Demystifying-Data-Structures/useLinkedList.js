const LinkedList = require("./DataStructures/LinkedList");

let ll = new LinkedList();
ll.add(33);
ll.add(2);
ll.add(44);
ll.add(64);
ll.add(64);

let sum = 0;
ll.traverse((v) => (sum += v));
console.log(sum);

let max = -Infinity;
ll.traverse((v) => (max = v > max ? v : max));
console.log(max);

let rList = new LinkedList();
ll.traverse((v) => rList.add(v));
rList.traverse(console.log);

console.log("Find unique values:");
//option 1
let set = new Set();
ll.traverse((v) => set.add(v));
console.log(set);

//option 2
let newset = {};
ll.traverse((v) => (newset[v] = 1));
console.log(Object.keys(newset));

console.log("count unique values:");
let items = {};
ll.traverse((v) => (items[v] ? items[v]++ : (items[v] = 1)));
console.log(items);
