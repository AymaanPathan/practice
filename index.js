function selectionSort(nums) {
  let min;
  for (let i = 0; i < nums.length; i++) {
    min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    let temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
  }
  return nums;
}

const arr = [3, 0, 2];
console.log(selectionSort(arr));
