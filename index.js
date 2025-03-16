var findMaxAverage = function (nums, k) {
  let start = 0;
  let end = 0;
  let max = -Infinity;
  let sum = 0;
  while (end < nums.length) {
    sum = sum + nums[end];
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      max = Math.max(max, sum / k);
      sum = sum - nums[start];
      start++;
      end++;
    }
  }
  return max;
};
