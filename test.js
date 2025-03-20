function MaximumSumSubarrayofSizeK(nums, k) {
  let start = 0;
  let end = 0;
  let max = -Infinity;
  let sum = 0;
  let ans = [];
  while (end < nums.length) {
    sum = sum + nums[end];
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      if (sum > max) {
        max = sum;
        ans = [];
        for (let i = start; i <= end; i++) {
          ans.push(nums[i]);
        }
      }
      start++;
      end++;
    }
  }
  return ans;
}
const nums = [1, 2, 3, 4, 5];
const k = 2;
console.log(MaximumSumSubarrayofSizeK(nums, k));
