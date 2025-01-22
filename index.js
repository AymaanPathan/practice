class Node{
    constructor(val){
        this.val  = val;
        this.next =null
    }
}

class Stack{
    constructor(val){
        this.top =null;
        this.length=0;
    }
    
    push(val){
        let newNode = new Node(val);
        if(!this.top){
            this.top = newNode;
        }
        newNode.next = this.top;
        this.top =newNode;
        this.length++;
    }
    
    pop(){
        if(!this.top){
            return undefined;
        }
        let temp = this.top;
        this.top = this.top.next;
        temp.next =null;
        this.length--
        return temp.val
    }
    isEmpty(){
        return this.length===0
    }
}

class Solution {
    reverse(S){
    let str=""
      let stack = new Stack();
      for(let i=0;i<S.length;i++){
          stack.push(S[i])
      }
    while(!stack.isEmpty()){
        str+=stack.pop()
    }
    return str
    }
}