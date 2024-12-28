class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor(val) {
    let newNode = new Node(val);
    if (!val) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
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
}
var mergeTwoLists = function (list1, list2) {
  let ans = new LinkedList();
  let temp1 = list1;
  let temp2 = list2;
  while (temp1 && temp2) {
    if (temp1.val <= temp2.val) {
      ans.push(temp1.val);
      temp1 = temp1.next;
    } else {
      ans.push(temp2.val);
      temp2 = temp2.next;
    }
  }
  while (temp1) {
    ans.push(temp1.val);
    temp1 = temp1.next;
  }

  while (temp2) {
    ans.push(temp2.val);
    temp2 = temp2.next;
  }
  return ans.head;
};
const ll1 = new LinkedList(1);

const ll2 = new LinkedList(1);

console.log(mergeTwoLists(ll1, ll2));
