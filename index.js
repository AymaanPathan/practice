var sortList = function(head) {
    if(!head || !head.next){
      return head;
    }
    let mid = findMid(head);
    let left = head;
    let right = mid.next;
    mid.next = null
    left = sortList(left)
    right = sortList(right)
    return merge(left,right)
};

function merge(l1,l2){
  let dummy = new ListNode(0);
  let head = dummy;

  while(l1 && l2){
    if(l1.val < l2.val){
      dummy.next = l1;
      l1 = l1.next;
    } else{
      dummy.next =l2;
      l2 = l2.next;
    }
    dummy  = dummy.next
  }
  if(l1) dummy.next = l1
  if(l2) dummy.next = l2
  return head.next
}

function findMid(head){
  let slow = head;
  let fast = head;
  while(fast && fast.next!==null && fast.next.next!==null){
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow
}