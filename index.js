function postFixToInfix(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let chr = s[i];
    if (
      (chr >= "A" && chr <= "Z") ||
      (chr >= "a" && chr <= "z") ||
      (chr >= "0" && chr <= "9")
    ) {
      stack.push(chr);
    } else {
      let t1 = stack[stack.length - 1];
      stack.pop();
      let t2 = stack[stack.length - 1];
      stack.pop();
      let con = "(" + t2 + chr + t1 + ")";
      stack.push(con);
    }
  }
  return stack[stack.length - 1];
}

console.log(postFixToInfix("AB-DE+F*/"));
