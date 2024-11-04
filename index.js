var removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next;
  }
  let current = head;
  let prev = head;

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return head;
};
