var CountDistinctElementsinEveryWindow = function (nums, k) {
  let start = 0;
  let end = 0;
  let ans = [];
  let freq = {};
  while (end < nums.length) {
    let num = nums[end];
    if (!freq[num]) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 == k) {
      ans.push(Object.keys(freq).length);

      let startNum = nums[start];
      freq[startNum]--;

      if (freq[startNum] === 0) {
        delete freq[startNum];
      }
      start++;
      end++;
    }
  }
  return ans;
};
const arr = [1, 2, 1, 3, 4, 2, 3];
const k = 4;

console.log(CountDistinctElementsinEveryWindow(arr, k));
