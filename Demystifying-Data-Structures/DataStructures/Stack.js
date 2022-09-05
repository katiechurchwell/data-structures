const LinkedList = require("./LinkedList");

class Stack extends LinkedList {
  push(val) {
    this.add(val);
  }

  pop() {
    if (!this.head) {
      console.error("Empty Stack Error");
      return;
    }

    let goner = this.head;
    this.head = this.head.next;
    return goner.value;
  }

  peek() {
    return this.head.value;
  }
}

module.exports = Stack;
