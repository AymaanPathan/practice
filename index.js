function maxOfLeft(nums) {
  let ans = [];
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    ans[i] = max;
  }
  return ans;
}

function maxOfRight(nums) {
  let ans = [];
  let max = nums[nums.length - 1];
  for (let i = nums.length - 1; i >= 0; i--) {
    max = Math.max(nums[i], max);
    ans[i] = max;
  }
  return ans;
}

function takeMinimum(nums) {
  let minimum = [];
  let right = maxOfRight(nums);
  let left = maxOfLeft(nums);
  let min = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(right[i], left[i]);
    minimum[i] = min;
  }
  return minimum;
}

var trap = function (height) {
  let min = takeMinimum(height);
  let ans = [];
  for (let i = 0; i < height.length; i++) {
    ans[i] = min[i] - height[i];
  }
  return ans.reduce((acc, sum) => acc + sum, 0);
};

const nums = [4, 2, 0, 3, 2, 5];
console.log("ans", trap(nums));

// 1 ans =  we have to do take min(right , left)
// 2 ans[i] = nums[i]
