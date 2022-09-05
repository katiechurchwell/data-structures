const LinkedList = require("./LinkedList");
const Node = require("./Node");

class Queue {
  constructor() {
    this.list = new LinkedList();
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    if (!this.front) {
      this.list.add(val);
      this.front = this.back = this.list.head;
    } else {
      let newNode = new Node(val, null);
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  dequeue(val) {
    let goner = this.front.value;
    this.front = this.front.next;
  }

  peek() {
    return this.front.value;
  }
}

module.exports = Queue;
