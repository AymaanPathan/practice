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
  Push(val) {
    //similar to unshift
    let newNode = new Node(val);
    if (!this.top || this.length == 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
}
const stack = new Stack(1);
stack.Push(2);
console.log(stack);
