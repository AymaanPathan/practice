function swap(nums, start, end) {
  let temp = nums[start];
  nums[start] = nums[end];
  nums[end] = temp;
}

function bubble(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
      }
    }
  }
  return nums;
}
const arr = [4, 7, 6, 1, 3];
console.log(bubble(arr));
