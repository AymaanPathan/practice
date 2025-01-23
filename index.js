class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.ss = new Stack2();
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

    if (this.ss.length === 0 || val <= this.ss.peek()) {
      this.ss.push(newNode);
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
    if (temp.val === this.ss.peek()) {
      this.ss.pop();
    }
    return temp.val;
  }

  getMin() {
    if (!this.ss.top) {
      return -1;
    }
    return this.ss.peek();
  }
}

class Stack2 {
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
    if (!this.top) {
      return undefined;
    }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp.val;
  }
  peek() {
    return this.top ? this.top.val : null;
  }
}
const s = new Stack();
s.push(1);
s.push(2);
s.push(3);

console.log(s.getMin());
