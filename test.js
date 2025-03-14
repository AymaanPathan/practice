function findMaxValueSubarray(nums, k) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let ans = [];
  let max = -Infinity;

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
      sum = sum - nums[start];
      start++;
      end++;
    }
  }
  return ans;
}
const nums = [1, 2];
console.log(findMaxValueSubarray(nums, 2));
