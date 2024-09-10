function secondLargest(nums) {
  let largest = nums[nums.length - 1];
  let secondLargest = -1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] !== largest) {
      secondLargest = nums[i];
      break;
    }
  }
  return secondLargest;
}
const arr = [1, 2, 3, 4, 5];
console.log(secondLargest(arr));
