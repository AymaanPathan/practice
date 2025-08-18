function nextGreaterElements(nums) {
  let n = nums.length;
  let stack = [];
  let ans = Array(n).fill(-1);
  for (let i = 2 * n - 1; i >= 0; i--) {
    let index = i % n;
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[index]) {
      stack.pop();
    }
    if (stack.length > 0) {
      ans[index] = nums[stack[stack.length - 1]];
    }
    stack.push(index)
  }
  return ans
}

// Example:
console.log(nextGreaterElements([1, 2, 1])); 
