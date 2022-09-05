const BinaryTree = require("./DataStructures/BinaryTree");

let bt = new BinaryTree(77);
bt.left = new BinaryTree(44);
bt.right = new BinaryTree(99);
bt.left.left = new BinaryTree(22);
bt.left.right = new BinaryTree(55);
bt.traverse(console.log);
