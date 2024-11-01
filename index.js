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
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      //if no node in linked list
      return undefined;
    }
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      //if only one node in linkedlist
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  shift() {
    if (!this.head) {
      // if no node in linkedlist
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length == 0) {
      //if one node in linked list
      this.tail = null;
    }
    return temp;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, val) {
    let getIndex = this.get(index);
    if (getIndex) {
      getIndex.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    let newNode = new Node(val);
    if (index === 0) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    if (index < 0 || index > this.length) {
      return undefined;
    }
    let pre = this.get(index - 1);
    newNode.next = pre.next;
    pre.next = newNode;
    this.length++;
    return true;
  }
  remove(index, val) {
    if (index === 0) {
      return this.shift(val);
    }
    if (index === this.length - 1) {
      return this.pop(val);
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let pre = this.get(index - 1);
    let temp = pre.next;
    pre.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}
const linkedList = new LinkedList(4);
linkedList.push(1);
linkedList.push(3);

console.log(linkedList.set(8, 2));
console.log(linkedList);
