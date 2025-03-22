function MaximumSubarray(nums, k) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let max = nums.reduce((acc, curr) => acc + curr, 0);
  while (end < nums.length) {
    sum = sum + nums[j];
  }
}
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const k = 3;
console.log(MaximumSubarray(nums, k));
