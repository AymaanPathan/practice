function stack1(s) {
  let stack1 = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] === "#") {
      stack1.pop();
      i++;
    } else {
      stack1.push(s[i]);
      i++;
    }
  }
  return stack1;
}
function stack2(t) {
  let stack2 = [];
  let i = 0;
  while (i < t.length) {
    if (t[i] === "#") {
      stack2.pop();
      i++;
    } else {
      stack2.push(t[i]);
      i++;
    }
  }
  return stack2;
}

var backspaceCompare = function (s, t) {
  let stackOne = stack1(s);
  let stackTwo = stack2(t);
  if (stackOne.join("") === stackTwo.join("")) {
    return true;
  }
  return false;
};

const s = "ab#c";
const t = "ad#c";
console.log(backspaceCompare(s, t));
