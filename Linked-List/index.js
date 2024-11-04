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
  isPalindrome() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      if (arr[start] !== arr[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
}

let linkedList = new LinkedList(1);
linkedList.push(2);
linkedList.push(2);
linkedList.push(1);

console.log(linkedList.isPalindrome());
