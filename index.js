class Solution {
    deleteMid(node) {
          if (!node || !node.next) return null;
       let slow = node;
       let fast = node;
       let prev = null
       while(fast && fast.next){
           prev = slow  // loop will end before prev became mid so we alsways  
           slow = slow.next;
           fast = fast.next.next;
       }
        prev.next = slow.next;
        return node
    }
}