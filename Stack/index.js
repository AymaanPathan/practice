class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(val) {
    let newNode = new Node(val);
    if (val !== undefined) {
      this.top = newNode;
      this.length = 1;
    } else {
      this.top = null;
      this.length = 0;
    }
  }
}
const stack = new Stack(1);
console.log(stack);
