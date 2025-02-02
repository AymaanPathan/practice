function infixToPostFix(str) {
  let ans = "";
  let stack = [];
  const precedence = { "^": 3, "*": 2, "/": 2, "+": 1, "-": 1 };
  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    if (
      (chr >= "A" && chr <= "Z") ||
      (chr >= "a" && chr <= "z") ||
      (chr >= "0" && chr <= "9")
    ) {
      ans += chr;
    } else if (chr == "(") {
      stack.push(chr);
    } else if (chr === ")") {
      while (stack.length !== 0 && stack[stack.length - 1] !== "(") {
        ans += stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length !== 0 &&
        precedence[stack[stack.length - 1]] >= precedence[chr]
      ) {
        ans += stack.pop();
      }
      stack.push(chr);
    }
  }
  while (stack.length !== 0) {
    // take all operator from stack in last
    ans += stack.pop();
  }
  return ans;
}
console.log(infixToPostFix("a+b*(c^d-e)"));
