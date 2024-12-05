var numberOfSteps = function (num) {
  return helper(num, 0);
};

function helper(num, step) {
  if (num === 0) {
    return step;
  }
  if (num % 2 == 0) {
    return helper(num / 2, step + 1);
  }
  return helper(num - 1, step + 1);
}

const num = 14;
console.log(numberOfSteps(num));
