var calPoints = function (operations) {
  let stack = [];
  for (i = 0; i < operations.length; i++) {
    if (!isNaN(Number(operations[i]))) {
      stack.push(Number(operations[i]));
    } else {
      if (operations[i] === "C") {
        stack.pop();
      } else if (operations[i] === "D") {
        let ans = 2 * stack[stack.length - 1];
        stack.push(ans);
      } else if (operations[i] === "+") {
        let addprevTwoScores =
          stack[stack.length - 1] + stack[stack.length - 2];

        stack.push(addprevTwoScores);
      }
    }
  }
  return stack.reduce((acc, curr) => acc + curr, 0);
};
const operations = ["5", "2", "C", "D", "+"];
console.log(calPoints(operations));
