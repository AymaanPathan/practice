function nearestGreatestToRight(nums) {
  let ans = [];
  let stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      ans.push(-1);
    } else if (stack.length > 0 && nums[i] < stack[stack.length - 1]) {
      ans.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && nums[i] >= stack[stack.length - 1]) {
      while (stack.length > 0 && nums[i] >= stack[stack.length - 1]) {
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
  return ans.reverse();
}
const nums = [1, 3, 2, 4];
console.log(nearestGreatestToRight(nums));
