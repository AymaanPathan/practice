var findNumbers = function (nums) {
  let filtered = nums.filter((item) => item.toString().length % 2 === 0);
  return filtered.length;
};
const nums = [12, 345, 2, 6, 7896];
console.log(findNumbers(nums));
