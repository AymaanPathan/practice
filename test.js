function maxSubArray(nums, k) {
  let ans = [];
  let start = 0;
  let end = 0;
  let sum = 0;
  let max = 0;
  while (end < nums.length) {
    sum = sum + nums[end];
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      max = Math.max(max, sum); // found window first time
      sum = sum - nums[start]; // remove first element after finding first max[max for now]
      start++; // move i after finding first sum
      end++; // move i after finding first sum
    }
  }
  return max;
}
const nums = [1, 2, 3, 4, 5, 6];
console.log(maxSubArray(nums, 2));
