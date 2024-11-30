var removeDuplicates = function (nums) {
  let unique = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[unique] = nums[i];
      unique++;
    }
  }
  return unique;
};
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
