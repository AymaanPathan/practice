class Solution {
      deleteNode(head, x) {
        
         if (!head) {
        return null; 
    }

    if (x === 1) {
        return head.next;
    }
        
        let temp = head;
        let before = this.get(head,x-1);


        before.next =  before.next.next
        return head
    }
    
     get(head,index) {
    let temp = head
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    for (let i = 1; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
}