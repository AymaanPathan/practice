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

  hasCycle() {
    let slow = this.head;
    let fast = this.head;
    while (slow && slow.next && fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  calculateLength(meetPoint) {
    let current = meetPoint;
    length = 0;
    do {
      current = current.next;
      length++;
    } while (current !== meetPoint);
    return length;
  }
}
let linkedList = new LinkedList(3);
linkedList.push(2);
linkedList.push(0);
linkedList.push(-4);
