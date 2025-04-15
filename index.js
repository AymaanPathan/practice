var removeDuplicates = function (s) {
  let stack = [];
  let i = 0;
  while (i < s.length) {
    if (stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
      i++;
    } else {
      stack.pop();
      i++;
    }
  }
  return stack.join("");
};
const s = "azxxzy";
console.log(removeDuplicates(s));
