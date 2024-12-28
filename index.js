var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (slow && slow.next && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
