class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
    this.ss = new SurportingStack();
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.top) {
      this.top = newNode;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    if (this.ss.length === 0 || this.ss.peek() >= val) {
      this.ss.push(val);
    }
  }

  pop() {
    if (!this.top) {
      return undefined;
    }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    if (this.ss.peek() === temp.val) {
      this.ss.pop();
    }
    return temp.val;
  }
  isEmpty() {
    return this.length === 0;
  }

  getMin() {
    return this.ss.peek();
  }
}

class SurportingStack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.top) return null;
    let poppedNode = this.top;
    this.top = this.top.next;
    this.length--;
    return poppedNode.val;
  }

  peek() {
    return this.top ? this.top.val : null;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(3);
stack.push(7);
stack.push(2);

console.log(stack.getMin());
