function rightHighestOfEachNum(num) {
  let stack = [];
  for (let i = num.length - 1; i >= 0; i--) {
    if (stack.length == 0) {
      stack.push(num[i]);
    } else {
      let max = Math.max(stack[stack.length - 1], num[i]);
      stack.push(max);
    }
  }
  return stack.reverse();
}

function leftHighestOfEachNum(num) {
  let stack = [];
  for (let i = 0; i < num.length; i++) {
    if (stack.length == 0) {
      stack.push(num[i]);
    } else {
      let max = Math.max(stack[stack.length - 1], num[i]);
      stack.push(max);
    }
  }
  return stack;
}

function getWaterLevelThatIsFilledOnEachBuilding(num) {
  let ans = [];
  let left = leftHighestOfEachNum(num);
  let right = rightHighestOfEachNum(num);

  for (let i = 0; i < left.length; i++) {
    ans.push(Math.min(left[i], right[i]) - num[i]);
  }
  return ans;
}

var trap = function (height) {
  let waterFilledBlock = getWaterLevelThatIsFilledOnEachBuilding(height);
  let ans = waterFilledBlock.reduce((a, b) => a + b);
  return ans;
};

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(arr));
