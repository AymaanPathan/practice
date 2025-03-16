function firstNegativeInEveryWindow(nums, k) {
  let start = 0;
  let end = 0;
  let allNegatives = [];
  let ans = [];
  while (end < nums.length) {
    if (nums[end] < 0) {
      allNegatives.push(nums[end]);
    }
    if (end - start + 1 < k) {
      end++;
    } else {
      if (allNegatives.length == 0) {
        ans.push(0);
      } else {
        ans.push(allNegatives[0]);
        if (nums[start] < 0) {
          allNegatives.shift();
        }
      }
      start++;
      end++;
    }
  }
  return ans;
}
const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const k = 3;
console.log(firstNegativeInEveryWindow(arr, k));
