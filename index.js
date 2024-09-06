// Maximum in array

function findMin(nums) {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
}

const arr = [3, 1, 4, 1, 5, 9, 2];

console.log(findMax(arr));
