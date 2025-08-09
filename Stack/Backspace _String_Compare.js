function popFromStackIfHash(string, stack) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "#") {
      stack.pop();
    } else {
      stack.push(string[i]);
    }
  }
  return stack;
}

var backspaceCompare = function (s, t) {
  let stack1 = [];
  let stack2 = [];
  const stack1Arr = popFromStackIfHash(s, stack1);
  const stack2Arr = popFromStackIfHash(t, stack2);
  if (stack1Arr.length !== stack2Arr.length) {
    return false;
  }
  if (stack1Arr.length <= 0 && stack2Arr.length <= 0) {
    return true;
  }
  for (let i = 0; i < stack1.length; i++) {
    if (stack1Arr[i] !== stack2Arr[i]) return false;
  }
  return true;
};

const s = "ab##";
const t = "c#d#";
console.log(backspaceCompare(s, t));
