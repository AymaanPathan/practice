var reverseList = function (head) {
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
};
