function nearest_smaller_to_left(nums) {
  let stack = [];
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1]);
    }
    stack.push(i);
  }
  return ans;
}

function nearest_smaller_to_right(nums) {
  let stack = [];
  let ans = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
      stack.pop();
    }
    if (stack.length === 0) {   
      ans.push(nums.length);
    } else {
      ans.push(stack[stack.length - 1]);
    }
    stack.push(i);
  }
  return ans.reverse();
}

function area(nums1, nums2) {
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans[i] = nums1[i] - nums2[i] - 1;
  }
  return ans;
}

var largestRectangleArea = function (heights) {
  const right = nearest_smaller_to_right(heights);
  const left = nearest_smaller_to_left(heights);
  const areaNums = area(right, left);
  const ans = [];
  for (let i = 0; i < areaNums.length; i++) {
    ans[i] = heights[i] * areaNums[i];
  }
  const maxVal = Math.max(...ans);
  return maxVal;
};

const arr = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(arr));
