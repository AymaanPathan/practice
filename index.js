// find second largest in array

function secondLargest(nums) {
  let largest = nums[0];
  let sLargest = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      sLargest = largest;
      largest = nums[i];
    } else if (largest > nums[i] && nums[i] > sLargest) {
      sLargest = nums[i];
    }
  }
  return sLargest;
}

const arr = [65, 13, 65, 1, 26, 2, 1];
console.log(secondLargest(arr));
