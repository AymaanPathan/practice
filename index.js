function swap(nums, start, end) {
  let temp = nums[start];
  nums[start] = nums[end];
  nums[end] = temp;
}

var missingNumber = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let correct = nums[i];
    if (nums[i] !== nums[correct] && nums[i] < nums.length) {
      swap(nums, correct, i);
    } else {
      i++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return nums.length;
};
const arr = [0, 1];
console.log(missingNumber(arr));
