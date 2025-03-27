var MaximumSumofAnySubarrayofSizeAtMostK = function (nums, k) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let ans = 0;
  while (end < nums.length) {
    sum = sum + nums[end];
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      ans = Math.max(ans, sum);
      sum -= nums[start];
      start++;
      end++;
    }
  }
  return ans;
};
const nums = [3, 2, 5, 4, 1];
const k = 2;

console.log(MaximumSumofAnySubarrayofSizeAtMostK(nums, k));
