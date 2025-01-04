class Solution {
    insertAtEnd(head, x) {
        let newNode = new Node(x)
        if(!head){
            head = newNode;
        }
        let temp = head;
        while(temp.next){
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.next =null
        return head;
    }
}