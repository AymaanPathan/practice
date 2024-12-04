function swap(nums, start, end) {
  let temp = nums[start];
  nums[start] = nums[end];
  nums[end] = temp;
}

function cyclicSort(nums) {
  let index = 0;
  while (index < nums.length) {
    let correct = nums[index] - 1;
    if (nums[index] != nums[correct]) {
      swap(nums, index, correct);
    } else {
      index++;
    }
  }
  return nums;
}

const arr = [3, 5, 2, 1, 4];
console.log(cyclicSort(arr));
