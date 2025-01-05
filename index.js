 findIntersection(head1, head2) {
       let newNode = new Node(0); //head
       let dummy = newNode 
       let temp1  =head1;
       let temp2 = head2;
       
       while(temp1 && temp2){
        if(temp1.data < temp2.data){
            temp1 = temp1.next
        }  else if(temp2.data < temp1.data){
            temp2 = temp2.next
        } else {
          dummy.next = new Node(temp1.data);
            dummy = dummy.next;

            // Move both pointers forward
            temp1 = temp1.next;
            temp2 = temp2.next;
        }
       }
       return newNode.next
    }