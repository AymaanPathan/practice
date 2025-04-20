var nextGreaterElements = function (nums) {
  let stack = [];
  let ans = [];
  for (let i = 2 * nums.length - 1; i >= 0; i--) {
    let index = i % nums.length;
    if (stack.length === 0) {
      if (i < nums.length) {
        ans.push(-1);
      }
    } else if (stack.length > 0 && stack[stack.length - 1] > nums[index]) {
      if (i < nums.length) {
        ans.push(stack[stack.length - 1]);
      }
    } else if (stack.length > 0 && stack[stack.length - 1] <= nums[index]) {
      while (stack.length > 0 && stack[stack.length - 1] <= nums[index]) {
        stack.pop();
      }
      if (i < nums.length) {
        if (stack.length == 0) {
          ans.push(-1);
        } else {
          ans.push(stack[stack.length - 1]);
        }
      }
    }
    stack.push(nums[index]);
  }
  return ans.reverse();
};
const nums = [1, 2, 1];

console.log(nextGreaterElements(nums));
