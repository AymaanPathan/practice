function swap(nums, first, second) {
  let temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
}

function selectionSort(nums) {
  let min;
  for (let i = 0; i < nums.length; i++) {
    min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) min = j;
    }
    if (i !== min) {
      swap(nums, i, min);
    }
  }
  return nums;
}
const nums = [4, 6, 2, 5, 3, 1];
console.log(selectionSort(nums));
