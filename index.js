var makeGood = function (s) {
  let stack = [];
  let i = 0;
  while (i < s.length) {
    if (
      stack.length > 0 &&
      stack[stack.length - 1] !== s[i] &&
      stack[stack.length - 1].toLowerCase() === s[i].toLowerCase()
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
    i++;
  }
  return stack.join("");
};
const s = "leEeetcode";
console.log(makeGood(s));
