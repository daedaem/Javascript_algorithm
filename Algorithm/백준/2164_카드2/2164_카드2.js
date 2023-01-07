const input = Number(
  require("fs").readFileSync("./2164.txt").toString().trim().split(" ")
);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this._size++;
    return newNode;
  }
  getHead() {
    return this.head.value;
  }
  removeNode() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }
  getSize() {
    return this._size;
  }
}

const li = new linkedList();

for (let i = 1; i <= input; i++) {
  li.addNode(i);
}
while (li.getSize() > 1) {
  li.removeNode();
  li.addNode(li.getHead());
  li.removeNode();
}
console.log(li.getHead());
