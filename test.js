var WindowwithTargetSumExistence = function (nums, k, target) {
  let start = 0;
  let end = 0;
  let sum = 0;
  while (end < nums.length) {
    sum = sum + nums[end];
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      if (sum === target) {
        return true;
      }
      sum = sum - nums[start];
    }
    start++;
    end++;
  }
  return false;
};
const arr = [1, 2, 3];
const k = 5;
const target = 6;

console.log(WindowwithTargetSumExistence(arr, k, target));
