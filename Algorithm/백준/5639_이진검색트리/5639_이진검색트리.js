(function solution() {
  const input = require("fs")
    .readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  class Tree {
    constructor(value) {
      this.root = value;
      this.left = null;
      this.right = null;
    }
    insertNode(value) {
      if (this.root < value) {
        if (this.right) this.right.insertNode(value);
        else this.right = new Tree(value);
      } else {
        if (this.left) this.left.insertNode(value);
        else this.left = new Tree(value);
      }
    }
  }

  const tree = new Tree(input[0]);
  for (let i = 1; i < input.length; i++) {
    tree.insertNode(input[i]);
  }
  (postOrder = (tree) => {
    tree.left && postOrder(tree.left);

    tree.right && postOrder(tree.right);
    console.log(tree.root);
  })(tree);
})();
