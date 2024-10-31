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
    let temp = this.get(index);
    if (temp) {
      temp.val = val;
      return true;
    }
    return false;
  }
}

let linkedList = new LinkedList(1);
linkedList.push(2);
console.log(linkedList.set(5, 4));
console.log(linkedList);
