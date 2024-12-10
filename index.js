function swap(nums, first, second) {
  let temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
}

function insertionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        swap(nums, j, j - 1);
      } else {
        break;
      }
    }
  }
  return nums;
}
const nums = [4, 6, 2, 5, 3, 1];
console.log(insertionSort(nums));
