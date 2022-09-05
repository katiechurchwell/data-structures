const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    this.head = new Node(val, this.head);
  }

  traverse(process) {
    let current = this.head;
    while (current) {
      process(current.value);
      current = current.next;
    }
  }
}

module.exports = LinkedList;
