var sortArrayByParity = function (nums) {
  let arr = [];
  let k;
  for (k = 0; k < nums.length; k++) {
    if (nums[k] % 2 === 0) {
      arr.push(nums[k]);
    }
  }

  for (k = 0; k < nums.length; k++) {
    if (nums[k] % 2) {
      arr.push(nums[k]);
    }
  }

  return arr;
};
const nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums));
