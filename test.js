var SmallestSubarraywithSumGreatorOrEqualTarget = function (nums, target) {
  let start = 0;
  let end = 0;
  let ans = Infinity;
  let sum = 0;
  let arr = [];
  while (end < nums.length) {
    sum = sum + nums[end];
    if (sum < target) {
      end++;
    } else if (sum >= target) {
      while (sum >= target) {
        if (ans > end - start + 1) {
          ans = end - start + 1; // new answer found
          arr = []; // empty arr after new answer found
          for (let i = start; i <= end; i++) {
            arr.push(nums[i]);
          }
        }
        sum = sum - nums[start];
        start++;
      }
      end++;
    }
  }
  return arr;
};
const nums = [2, 3, 1, 2, 4, 3];
const target = 7;

console.log(SmallestSubarraywithSumGreatorOrEqualTarget(nums, target));
