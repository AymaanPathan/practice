function AllSubarraysofSizeK(nums, k) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let ans = [];
  while (end < nums.length) {
    sum = sum + nums[end];
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      ans.push(sum / k);
      sum = sum - nums[start];
      start++;
      end++;
    }
  }
  return ans;
}
const nums = [2, 4, 6, 8, 10];
const k = 2;
console.log(AllSubarraysofSizeK(nums, k));
