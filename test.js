function slidingWindowSubArray(nums, k) {
  let ans = [];
  let start = 0;
  let end = 0;
  while (end < nums.length) {
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      let sub = [];
      for (let i = start; i <= end; i++) {
        sub.push(nums[i]);
      }
      ans.push(sub);
      start++;
      end++;
    }
  }
  return ans;
}
const nums = [1, 2, 3, 4, 5, 6];
console.log(slidingWindowSubArray(nums, 2));
