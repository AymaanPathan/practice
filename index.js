function reverse(head) {
  let prev = null;
  let pres = head;
  let next = null;
  while (pres !== null) {
    next = pres.next;
    pres.next = prev;
    prev = pres;
    pres = next;
  }
  return prev;
}

function findMiddle(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function isPalindrome(head) {
  let mid = findMiddle(head);
  let headSecond = reverse(mid);
  let reverseHead = headSecond;

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
