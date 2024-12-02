function insertionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        let temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return nums;
}

const nums = [4, 6, 2, 5, 3, 1];
console.log(insertionSort(nums));
