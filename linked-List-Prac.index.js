class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor(val) {
    if (val) {
      let newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
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
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next; //head is done but tail is till on node
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null; // remove tail from that node
    }
    return temp;
  }
  get(index) {
    let temp = this.head;
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, val) {
    let getNode = this.get(index);
    if (getNode) {
      getNode.val = val;
    }
    return getNode;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.unShift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    let newNode = new Node(val);
  }
}
let linkedList = new LinkedList(1);
linkedList.push(2);
linkedList.push(3);

console.log(linkedList.get(5));
