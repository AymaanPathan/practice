var clearDigits = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let num = "";
    if (char >= "0" && char <= "9") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};
