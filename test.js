var SmallestSubarraywithSumGreatorOrEqualTarget = function (nums, target) {
  let start = 0;
  let end = 0;
  let ans = [];
  let sum = 0;
  let min = Infinity;
  while (end < nums.length) {
    sum = sum + nums[end];
    if (sum < target) {
      end++;
    } else if (sum >= target) {
      while (sum >= target) {
        if (end - start + 1 < min) {
          min = end - start + 1;
          ans = [];
          for (let i = start; i <= end; i++) {
            ans.push(nums[i]);
          }
        }
        sum = sum - nums[start];
        start++;
        // end  ->end is agge than start we cant do this
      }
      end++;
    }
  }
  return ans;
};
const nums = [2, 3, 1, 2, 4, 3];
const target = 7;

console.log(SmallestSubarraywithSumGreatorOrEqualTarget(nums, target));
