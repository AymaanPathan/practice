var minSubArrayLen = function (target, nums) {
  let start = 0;
  let end = 0;
  let maxSize = Infinity;
  let sum = 0;
  while (end < nums.length) {
    sum = sum + nums[end];
    if (sum < target) {
      end++;
    } else if (sum === target) {
      if (maxSize > end - start + 1) {
        maxSize = end - start + 1;
      }
      end++;
    }
    if (sum > target) {
      while (sum >= target) {
        if (maxSize > end - start + 1) {
          maxSize = end - start + 1;
        }
        sum = sum - nums[start];
        start++;
      }
      end++;
    }
  }
  return maxSize;
};
const nums = [2, 3, 1, 2, 4, 3];
const target = 7;
console.log(minSubArrayLen(target, nums));
