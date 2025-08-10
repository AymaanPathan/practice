var calPoints = function (operations) {
  let stack = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "C") {
      stack.pop();
    } else if (operations[i] === "D") {
      stack.push(Number(stack[stack.length - 1]) * 2);
    } else if (operations[i] === "+") {
      let total =
        Number(stack[stack.length - 1]) + Number(stack[stack.length - 2]);
      stack.push(Number(total));
    } else {
      stack.push(Number(operations[i]));
    }
  }
  return stack.reduce((a, b) => a + b, 0);
};
const nums = ["5", "2", "C", "D", "+"];
console.log(calPoints(nums));
