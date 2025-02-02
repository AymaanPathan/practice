var topKFrequent = function (nums, k) {
  let freq = {};
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!freq[num]) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
  }

  const entries = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    ans.push(parseInt(entries[i][0]));
  }
  return ans;
};
const nums = [1, 1, 1, 2, 2, 3];
console.log(topKFrequent(nums, 2));
