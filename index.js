class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    let newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      return undefined;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let pre = this.head;
    let temp = this.head;
    if (!this.head) {
      return undefined;
    } else {
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
    }
    return temp;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
}
const linkedList = new LinkedList(1);
linkedList.push(2);
linkedList.push(3);

console.log(linkedList.shift());
console.log(linkedList);
