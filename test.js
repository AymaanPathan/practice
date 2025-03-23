var CountWindowswithSumatLeastTarget = function (nums, k, target) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let ans = 0;
  while (end < nums.length) {
    sum = sum + nums[end];
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      if (sum >= target) {
        ans++;
      }
      sum = sum - nums[start];
      start++;
      end++;
    }
  }
  return ans;
};
const nums = [1, 2, 3, 1];
const k = 2;
const target = 10;
console.log(CountWindowswithSumatLeastTarget([1, 2, 3, 1], 2, 10)); // Expected output: 0
console.log(CountWindowswithSumatLeastTarget([2, 1, 5, 1, 3, 2], 3, 7)); // Expected output: 3
console.log(CountWindowswithSumatLeastTarget([4, 4, 4, 4], 2, 8)); // Expected output: 3
console.log(CountWindowswithSumatLeastTarget([100, 200, 300, 400], 2, 500)); // Expected output: 2
console.log(CountWindowswithSumatLeastTarget([3, 3, 3], 3, 9)); // Expected output: 1
