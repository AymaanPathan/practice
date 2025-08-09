var dailyTemperatures = function (temperatures) {
  let stack = [];
  let ans = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans.push(0);
    } else {
      ans.push(stack[stack.length - 1]);
    }
    stack.push(i);
  }

  ans.reverse();
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] !== 0) {
      ans[i] = ans[i] - i;
    }
    if (ans[i] == 0) {
      ans[i] = 0;
    }
  }
  return ans;
};
const arr = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(arr));
