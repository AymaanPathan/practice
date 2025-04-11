/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let chr = s[i];
    if (chr === "(") {
      stack.push(")");
    } else if (chr === "{") {
      stack.push("}");
    } else if (chr === "[") {
      stack.push("]");
    } else {
      if (stack.pop() !== chr) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
