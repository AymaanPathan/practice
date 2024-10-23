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
    let addNode = new Node(val);
    if (!this.head) {
      this.head = addNode;
      this.tail = addNode;
    } else {
      this.tail.next = addNode;
      this.tail = addNode;
    }
    this.length++;
    return addNode;
  }
}

const newLinkedList = new LinkedList(4);
newLinkedList.push(5);
console.log(newLinkedList);
