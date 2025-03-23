var MinimumElementinEveryWindow = function (nums, k) {
  let start = 0;
  let end = 0;
  let minArray = [];
  let ans = [];
  while (end < nums.length) {
    while (
      minArray.length > 0 &&
      nums[minArray[minArray.length - 1]] > nums[end]
    ) {
      minArray.pop();
    }
    minArray.push(end);
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      ans.push(nums[minArray[0]]);

      if (minArray[0] === start) {
        minArray.shift();
      }
      start++;
      end++;
    }
  }
  return ans;
};

const arr = [10, 5, 2, 7, 8, 7];
const k = 3;
console.log(MinimumElementinEveryWindow(arr, k));
