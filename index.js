var sortList = function(head) {
    if(!head || !head.next){
      return head
    }
    let mid = findMiddle(head);
    let left = head;
    let right = mid.next 
    mid.next = null  
     left = sortList(left);
    right = sortList(right);
    return merge(left, right);
};

function merge(l1,l2){
  let dummy = new ListNode(0);
  let current = dummy;
  while(l1 && l2){
    if(l1.val <l2.val){
      current.next = l1
      l1 = l1.next;
    } else{
      current.next = l2;
      l2 = l2.next
    }
    current = current.next
  }
  if(l1) current.next = l1
  if(l2) current.next = l2
  return dummy.next;
}

function findMiddle(head){
  let slow = head;
  let fast = head;
  while(fast!==null && fast.next!==null){
    slow = slow.next;
    fast = fast.next.next
  }
  return slow;
}