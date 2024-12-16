var repeatedNTimes = function (nums) {
  let freq = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!freq[num]) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
    if (freq[num] >= 2) {
      return num;
    }
  }
  return -1;
};
const nums = [5, 1, 5, 2, 5, 3, 5, 4];
console.log(repeatedNTimes(nums));
