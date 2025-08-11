function Minimum_Add_to_Make_Parentheses_Valid(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
    } else if (str[i] === ")") {
      if (stack.length > 0 && stack[stack.length - 1] == "(") {
        stack.pop();
      } else {
        stack.push(")");
      }
    }
  }
  return stack.length;
}
const s = "(((";
console.log(Minimum_Add_to_Make_Parentheses_Valid(s));
