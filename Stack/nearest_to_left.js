// 2. finding the nearest greater to left
// Input: [10, 20, 15, 30, 25, 40];
// Output: [0, 0, 20, 0, 30, 0];

function nearestGreaterToLeft(nums) {
  let stack = [];
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans.push(0);
    } else {
      ans.push(stack[stack.length - 1]);
    }
    stack.push(nums[i]);
  }
  return ans;
}

const arr2 = [10, 20, 15, 30, 25, 40];
console.log(nearestGreaterToLeft(arr2));
