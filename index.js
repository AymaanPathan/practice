var partition = function(head, x) {
    let small = new ListNode(0);
    let larger = new ListNode(0);
    let smallPointer = small;
    let largerPointer = larger


    while(head){
      if(head.val < x){
        smallPointer.next = head;
        smallPointer = smallPointer.next
      } else{
        largerPointer.next = head;
        largerPointer = largerPointer.next
      }
      head = head.next
    }
    largerPointer.next = null;
    smallPointer.next = larger.next
    return small.next
};