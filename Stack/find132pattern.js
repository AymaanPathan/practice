var find132pattern = function (nums) {
  const stack = [];
  let third = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < third) return true;
    while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
      third = stack.pop();
    }
    stack.push(nums[i]);
  }

  return stack;
};

const arr1 = [1, 2, 3, 4]; // no 132 pattern
const arr2 = [3, 1, 4, 2]; // has 132 pattern

console.log(find132pattern(arr1)); // false

