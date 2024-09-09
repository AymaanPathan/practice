// find second largest in array

function secondLargest(nums) {
  let largest = nums[0];
  let secondLargest = nums[nums.length - 1];
  for (let i = 0; i < nums.length; i++) {
    if (largest < nums[i]) {
      largest = nums[i];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > secondLargest && nums[i] != largest) {
      secondLargest = nums[i];
    }
  }

  return secondLargest;
}

const arr = [65, 3, 1, 56, 2, 1];
console.log(secondLargest(arr));
