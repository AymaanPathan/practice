/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let current1 = headA;
  let current2 = headB;

  while (current1 !== current2) {
    current1 = current1 === null ? headB : current1.next;
    current2 = current2 === null ? headA : current2.next;
  }
  return current1;
};
