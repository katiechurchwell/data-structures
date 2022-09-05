class BinaryTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  traverse(process) {
    process(this.value);
    if (this.left) this.left.traverse(process);
    if (this.right) this.right.traverse(process);
  }
}

module.exports = BinaryTree;
