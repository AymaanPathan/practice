var dailyTemperatures = function (temperatures) {
  let stack = [];
  let ans = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      stack[stack.length - 1].value <= temperatures[i]
    ) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans.push(i);
    } else {
      ans.push(stack[stack.length - 1].index);
    }
    stack.push({
      value: temperatures[i],
      index: i,
    });
  }
  ans.reverse();
  for (let i = 0; i < ans.length; i++) {
    ans[i] = ans[i] - i;
  }
  return ans
};
const arr = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70];
console.log(dailyTemperatures(arr));
