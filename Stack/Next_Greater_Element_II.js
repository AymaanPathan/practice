var nextGreaterElements = function (nums) {
  let stack = [];
  let ans = new Array(nums.length).fill(-1);
  for (let i = 0; i < nums.length * 2; i++) {
    while (
      stack.length > 0 &&
      nums[stack[stack.length - 1]] < nums[i % nums.length]
    ) {
      const poppedIndex = stack.pop();
      ans[poppedIndex] = nums[i % nums.length];
    }
    if (i < nums.length) {
      stack.push(i);
    }
  }
  return ans;
};

const arr = [1, 2, 1];
console.log(nextGreaterElements(arr));
