// If "+" Record a new score that is the sum of the previous two scores.
// if "D" Record a new score that is the double of the previous score.
// if "C" Remove the  stack top
// Lastly sum it all

var calPoints = function (operations) {
  let stack = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      let sum = stack[stack.length - 1] + stack[stack.length - 2];
      stack.push(sum);
    } else if (operations[i] === "D") {
      let double = stack[stack.length - 1] * 2;
      stack.push(double);
    } else if (operations[i] === "C") {
      stack.pop();
    } else {
      stack.push(Number(operations[i]));
    }
  }
  let ans = 0;
  for (let i = 0; i < stack.length; i++) {
    ans += stack[i];
  }
  return ans;
};

const ops = ["5", "2", "C", "D", "+"];
console.log(calPoints(ops));
