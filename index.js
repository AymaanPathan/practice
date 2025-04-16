var finalPrices = function (prices) {
  let stack = [];
  let ans = [];
  for (let i = prices.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      ans.push(prices[i]);
    } else if (stack.length > 0 && stack[stack.length - 1] > prices[i]) {
      while (stack.length > 0 && stack[stack.length - 1] > prices[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        ans.push(prices[i]);
      } else {
        ans.push(prices[i] - stack[stack.length - 1]);
      }
    } else if (stack.length > 0 && stack[stack.length - 1] <= prices[i]) {
      ans.push(prices[i] - stack[stack.length - 1]);
    }
    stack.push(prices[i]);
  }
  return ans.reverse();
};
const prices = [8, 4, 6, 2, 3];
console.log(nearestSmallestToRight(prices));
