function lengthCycle (head){
  let slow = head;
  let fast = head;
  let length  = 0
  while(fast!==null && fast.next!=null){
    slow = slow.next
    fast = fast.next.next
    if(slow===fast){
      let temp = slow;
      do{
        temp = temp.next
        length++
      } while(temp!==slow)
        return length
    }
  }
  return 0
}

var detectCycle = function(head) {
    let length = lengthCycle(head);
    let second = head;
    let first = head
    if(length===0){
      return null
    }
    while(length >=1){
      second = second.next;
      length--
    }
    while(first!==second){
      first = first.next;
      second = second.next
    }
    return first
};