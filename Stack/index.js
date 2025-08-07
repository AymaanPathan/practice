// 1. stack nearest greater to right

function greaterToRight(num) {
  let stack = [];
  let ans = [];
  for (let i = num.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= num[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1]);
    }
    stack.push(num[i]);
  }
  return ans.reverse();
}

const arr = [1, 3, 2, 4];
console.log(greaterToRight(arr));
