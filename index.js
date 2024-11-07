/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
  let current1 = list1;
  let current2 = list2;
  let ans = new LinkedList();

  while (current1 && current2) {
    if (current1.val <= current2.val) {
      ans.push(current1.val);
      current1 = current1.next;
    } else {
      ans.push(current2.val);
      current2 = current2.next;
    }
  }

  while (current1) {
    ans.push(current1.val);
    current1 = current1.next;
  }

  while (current2) {
    ans.push(current2.val);
    current2 = current2.next;
  }
  return ans.head;
};
