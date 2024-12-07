var findMin = function (nums) {
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (min >= nums[i]) {
      min = nums[i];
    }
  }
  return min;
};
const nums = [11, 13, 15, 17];
console.log(findMin(nums));
