function swap(nums, first, second) {
  let temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
}

function bubbleSort(nums) {
  for (let i = nums.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
      }
    }
  }
  return nums;
}
const nums = [6, 5, 3, 2, 9, 10, 1, 34, 56, 78, 32];
console.log(bubbleSort(nums));
