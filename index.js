/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let numStr = x.toString();
  let stack = [];
  for (let i = 0; i < numStr.length; i++) {
    stack.push(numStr[i]);
  }
  let ans = "";
  while (stack.length > 0) {
    ans += stack.pop();
  }
  if (
    parseInt(ans, 10) > Math.pow(2, 31) ||
    parseInt(ans, 10) < Math.pow(-2, 31)
  ) {
    return 0;
  }
  return ans > 0 ? parseInt(ans, 10) : -parseInt(ans, 10);
};
