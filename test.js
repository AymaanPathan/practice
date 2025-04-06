function nearestSmallestToLeft(nums) {
  let ans = [];
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    if (stack.length === 0) {
      ans.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (stack.length >= 0 && stack[stack.length - 1] >= nums[i]) {
      while (stack.length > 0 && stack[stack.length - 1] >= nums[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        ans.push(-1);
      } else {
        ans.push(stack[stack.length - 1]);
      }
    }
    stack.push(nums[i]);
  }
  return ans;
}
const nums = [4, 5, 2, 10, 8];
console.log(nearestSmallestToLeft(nums));
