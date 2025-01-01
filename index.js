var lengthOfCycle = function(head) {
    let slow = head;
    let fast = head;
    let len =0
    while(fast && fast.next!==null){
      slow = slow.next;
      fast = fast.next.next;
      if(slow===fast){
        let temp = slow;
        do{
          temp = temp.next
          len++
        }while(temp!==slow)
          return len
      }
    }
    return 0
};