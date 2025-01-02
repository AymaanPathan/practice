class Solution {
    getKthFromLast(head, k) {
       head = this.reverse(head);
      let temp = head;
       for(let i=1;i<k;i++){
           if(temp!==null){
           temp = temp.next
           } else {
                return -1; 
            }
       }
       return temp!==null ? temp.data  :-1
    }
    reverse(head){
        let prev = null;
        let pres = head;
        while(pres){
            let next = pres.next;
            pres.next = prev
            prev = pres;
            pres = next;
        }
    return prev
    }
}