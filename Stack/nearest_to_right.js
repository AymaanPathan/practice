// 1. finding the nearest greater to right
// [1,3,4,5]

// output => [3,4,5,0]
function nearestGreaterToRight(nums) {
  let stack = [];
  let ans = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length >= 0 && stack[stack.length - 1] < nums[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans.push(0);
    } else {
      ans.push(stack[stack.length - 1]);
    }
    stack.push(nums[i]);
  }
  return ans.reverse();
}

const arr = [1, 3, 4, 5];
console.log(nearestGreaterToRight(arr));
