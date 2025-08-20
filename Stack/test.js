function backSpace(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      console.log("backspace");
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.join("");
}

var backspaceCompare = function (s, t) {
  let str1BackSpace = backSpace(s);
  let str2BackSpace = backSpace(t);
  return str1BackSpace===str2BackSpace
};
const s = "ab#c";
console.log(backSpace(s));
