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
  pop() {
    if (this.length == 0 || !this.top) {
      return undefined;
    }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}
const stack = new Stack(1);
stack.Push(2);
stack.pop();
console.log(stack);
