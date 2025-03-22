var maxSlidingWindow = function (nums, k) {
  let start = 0;
  let end = 0;
  let ans = [];
  let maxArray = [];
  while (end < nums.length) {
    while (
      maxArray.length > 0 &&
      nums[maxArray[maxArray.length - 1]] < nums[end]
    ) {
      maxArray.pop();
    }
    maxArray.push(end);

    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 == k) {
      ans.push(nums[maxArray[0]]);
      if (maxArray[0] === start) {
        maxArray.shift();
      }
      start++;
      end++;
    }
  }
  return ans;
};

let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
console.log(maxSlidingWindow(nums, k));
