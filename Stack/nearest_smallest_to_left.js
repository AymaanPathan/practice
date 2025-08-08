// input : [4,5,2,10,8]
// output : [0,4,0,2,2]

function nearest_smallest_to_left(nums) {
  let stack = [];
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= nums[i]) {
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
const arr = [4, 5, 2, 10, 8];
console.log(nearest_smallest_to_left(arr));
