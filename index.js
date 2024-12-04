function swap(nums, start, end) {
  let temp = nums[start];
  nums[start] = nums[end];
  nums[end] = temp;
}
var findDuplicates = function (nums) {
  let i = 0;
  let ans = [];
  while (i < nums.length) {
    let correct = nums[i] - 1;
    if (nums[i] !== nums[correct]) {
      swap(nums, correct, i);
    } else {
      i++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      ans.push(nums[i]);
    }
  }
  return ans;
};

const arr = [1];
console.log(findDuplicates(arr));
