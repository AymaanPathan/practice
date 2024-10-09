var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;

  for (let i = 0; i < s.length; i++) {
    let rotateStr = "";
    for (let j = i; j < s.length; j++) {
      rotateStr += s[j];
    }
    for (let k = 0; k < i; k++) {
      rotateStr += s[k];
    }
    if (rotateStr === goal) {
      return true;
    }
  }
  return false;
};
const s = "abcde";
const goal = "cdeab";
console.log(rotateString(s, goal));
