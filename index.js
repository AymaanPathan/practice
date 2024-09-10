// Only works with sorted array

function secondLargest(nums) {
  let largest = nums[0];
  let secondLargest = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > secondLargest && nums[i] != largest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(secondLargest(arr));
