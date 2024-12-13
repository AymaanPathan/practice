/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let freq = {};
  let ans;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!freq[num]) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
  }

  const key = Object.keys(freq);
  const value = Object.values(freq);

  for (let i = 0; i < value.length; i++) {
    if (value[i] === 1) return Number(key[i]);
  }
};
