function moveZeroes(nums) {
  let nonZeros = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      nums[nonZeros] = nums[i];
      nonZeros++;
    }
  }
  for (let j = nonZeros; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
}

const arr = [0, 1, 0, 3, 12];
console.log(moveZeroes(arr));
