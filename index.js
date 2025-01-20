 nextLargerElement(arr) {
        let stack = new Stack();
         let nums = [];
       for(let i=arr.length-1;i>=0;i--){
         while(!stack.isEmpty() && stack.peek()<=arr[i]){
             stack.pop();
         }
           if(!stack.isEmpty()){
               nums.push(stack.peek());
           }else{
               nums.push(-1)
           }
           stack.push(arr[i])
       }
        return nums.reverse()
    }