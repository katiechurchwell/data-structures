const Queue = require("./DataStructures/Queue");

let q = new Queue();

q.enqueue(55);
q.enqueue(33);
q.enqueue(77);

q.dequeue();

console.log(q);
