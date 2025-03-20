function CountEvenNumbersinEveryWindow(nums, k) {
  let start = 0;
  let end = 0;
  let count = 0;
  let ans = [];
  while (end < nums.length) {
    if (nums[end] % 2 === 0) {
      count++;
    }
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      ans.push(count);
      if (nums[start] % 2 === 0) count--;
      start++;
      end++;
    }
  }
  return ans;
}
const nums = [1, 2, 3, 4, 5];
const k = 3;
console.log(CountEvenNumbersinEveryWindow(nums, k));
