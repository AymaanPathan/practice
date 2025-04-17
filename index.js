var dailyTemperatures = function (temperatures) {
  let stack = [];
  let ans = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      ans.push(0);
    } else if (
      stack.length > 0 &&
      stack[stack.length - 1].element > temperatures[i]
    ) {
      ans.push(stack[stack.length - 1].index - i);
    } else if (
      stack.length > 0 &&
      stack[stack.length - 1].element <= temperatures[i]
    ) {
      while (
        stack.length > 0 &&
        stack[stack.length - 1].element <= temperatures[i]
      ) {
        stack.pop();
      }
      if (stack.length == 0) {
        ans.push(0);
      } else {
        ans.push(stack[stack.length - 1].index - i);
      }
    }
    stack.push({ element: temperatures[i], index: i });
  }
  return ans.reverse();
};
const temperatures = [30, 40, 50, 60];
console.log(findNearestGreatestToRight(temperatures));
