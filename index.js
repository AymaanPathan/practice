 isPalindrome(head) {
       let slow =head;
       let fast = head;
       while(fast && fast.next){
           slow = slow.next;
           fast = fast.next.next;
       }
       let prev = null
       while(slow){
            let next = slow.next;
            slow.next = prev
            prev = slow;
            slow = next;
       }
       let left = head;
       let right = prev;
       while(right){
           if(left.data!==right.data){
               return false
           }
           left = left.next;
           right = right.next
       }
       return true
    }