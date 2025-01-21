 calculateSpan(arr) {
    let stack = new Stack();
    const nums = [];

    for(let i=0;i<arr.length;i++){
        while(!stack.isEmpty() && arr[i]>=stack.peek().val){
            stack.pop()
        }
        if(!stack.isEmpty()){
            nums.push(stack.peek().index);
        }else{
            nums.push(-1)
        }
        stack.push(arr[i],i)
    }
    return nums;
  }