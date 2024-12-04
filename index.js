function swap(nums, start, end) {
  let temp = nums[start];
  nums[start] = nums[end];
  nums[end] = temp;
}
var firstMissingPositive = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let correct = nums[i] - 1;
    if (nums[i] > 0 && nums[i] !== nums[correct] && nums[i] <= nums.length) {
      swap(nums, correct, i);
    } else {
      i++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};
