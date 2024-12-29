class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    if (val !== undefined) {
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
    //edge case for single
    let temp = this.head;
    let pre = this.head;
    if (!this.head) {
      return undefined;
    }
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      // for single node
      this.head = null;
      this.tail = null;
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
    // edge case for single node
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      //for single node
      this.tail = null;
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
    let temp = this.get(index);
    if (temp) {
      temp.val = val;
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
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) {
      return this.shift();
    }
    if (index == this.length - 1) {
      return this.pop();
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let before = this.get(index - 1);
    let temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }

  deleteMiddle() {
    let arr = [];
    let temp = this.head;
    while (temp) {
      arr.push(temp);
      temp = temp.next;
    }
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor(start + end) / 2;
    let current = this.head;
    for (let i = 0; i < mid; i++) {
      current = current.next;
    }
    return current;
  }

  removeDuplicates(val) {
    while (this.head && this.head.val === val) {
      this.head = this.head.next;
      this.length--;
    }
    let current = this.head;
    let prev = this.head;
    while (current) {
      if (current.val === val) {
        prev.next = current.next;
        this.length--;
      } else {
        prev = current;
      }
      current = current.next;
    }
    if (prev && prev.next === null) {
      this.tail = prev;
    }
    return this.head;
  }
  isPalindrome(head) {
    let mid = findMiddle(head);
    let headSecond = reverse(mid);

    while (head !== null && headSecond !== null) {
      if (head.val !== headSecond.val) {
        break;
      }
      head = head.next;
      headSecond = headSecond.next;
    }
    if (head === null || headSecond === null) {
      return true;
    } else {
      return false;
    }
  }
}

let linkedList = new LinkedList();
linkedList.push(3);
linkedList.push(4);
linkedList.push(7);
linkedList.push(1);
linkedList.push(2);
linkedList.push(6);

console.log(linkedList.get(12));
