var reverseList = function(head) {
    let prev = null;
    let pres = head;
    while(pres){
        let next = pres.next;
        pres.next = prev;
        prev = pres;
        pres = next;
    }
    return prev
};