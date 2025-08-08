function stock_span(nums) {
  let ans = [];
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1]);
    }
    stack.push(i);
  }
  // Now find the gap
  for (let i = 0; i < ans.length; i++) {
    ans[i] = i - ans[i];
  }
  return ans
}
const arr = [];
console.log(stock_span(arr));
