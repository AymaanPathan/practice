var isValid = function (s) {
  let stack = [];
  if (s.length <= 1) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(")");
    } else if (s[i] === "{") {
      stack.push("}");
    } else if (s[i] === "[") {
      stack.push("]");
    } else {
      let poppedValue = stack.pop();
      if (poppedValue !== s[i]) {
        return false;
      }
    }
  }
  return stack.length == 0;
};
const str = "()[]{}";

console.log(isValid(str));
