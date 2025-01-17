  sortedMerge(head1, head2) {
        let newNode = new Node(0);
        let current = newNode;
        let temp1 = head1;
        let temp2 = head2;
        while(temp1 && temp2){
            if(temp1.data <=temp2.data){
                current.next = temp1;
                temp1 = temp1.next
            } else{
                current.next = temp2;
                temp2 = temp2.next
            }
            current = current.next
        }
        if (temp1) {
            current.next = temp1;
        } else if (temp2) {
            current.next = temp2;
        }
    return newNode.next
    }