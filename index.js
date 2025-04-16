var finalPrices = function (prices) {
  let stack = [];
  let ans = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      ans.push(nums[i]);
    } else if (stack.length > 0 && stack[stack.length - 1] > nums[i]) {
      while (stack.length > 0 && stack[stack.length - 1] > nums[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        ans.push(nums[i]);
      } else {
        ans.push(nums[i] - stack[stack.length - 1]);
      }
    } else if (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
      ans.push(nums[i] - stack[stack.length - 1]);
    }
    stack.push(nums[i]);
  }
  return ans.reverse();
};
const prices = [8, 4, 6, 2, 3];
console.log(nearestSmallestToRight(prices));
