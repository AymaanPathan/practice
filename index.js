var findNumbers = function (nums) {
  let count = 0;
  let str = [];
  for (let i = 0; i < nums.length; i++) {
    str.push(nums[i].toString());
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i].length % 2 === 0) {
      count++;
    }
  }
  return count;
};
const nums = [12, 345, 2, 6, 7896];
console.log(findNumbers(nums));
