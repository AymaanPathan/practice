function StockSpan(nums) {
  let stack = [];
  let nearestGreatestToLeftIndexArr = [];
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (stack.length === 0) {
      // If nothing on left side
      nearestGreatestToLeftIndexArr.push(-1);
    }
    // If has left side but smaller
    else if (stack.length > 0 && stack[stack.length - 1].element <= nums[i]) {
      while (stack.length > 0 && stack[stack.length - 1].element <= nums[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        nearestGreatestToLeftIndexArr.push(-1);
      } else {
        nearestGreatestToLeftIndexArr.push(stack[stack.length - 1].index);
      }
    }
    // Finaly we get larger on  left
    else {
      nearestGreatestToLeftIndexArr.push(stack[stack.length - 1].index);
    }
    stack.push({ element: nums[i], index: i });
  }
  for (let i = 0; i < nearestGreatestToLeftIndexArr.length; i++) {
    ans[i] = i - nearestGreatestToLeftIndexArr[i];
  }
  return ans;
}
const nums = [100, 80, 60, 70, 60, 75, 85];
console.log(StockSpan(nums));
