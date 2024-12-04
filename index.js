function swap(nums, start, end) {
  let temp = nums[start];
  nums[start] = nums[end];
  nums[end] = temp;
}
var findDisappearedNumbers = function (nums) {
  let ans = [];
  let i = 0;
  while (i < nums.length) {
    let correct = nums[i] - 1;
    if (nums[i] !== nums[correct] && nums[i] !== nums[correct]) {
      swap(nums, i, correct);
    } else {
      i++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      ans.push(i + 1);
    }
  }
  return ans;
};

const arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(arr));
