// Find nearest smllest to left
function nearestsmllesttoleft(nums) {
  let stack = [];
  let index = [];
  for (let i = 0; i < nums.length; i++) {
    if (stack.length === 0) {
      index.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1].element >= nums[i]) {
      while (stack.length > 0 && stack[stack.length - 1].element >= nums[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        index.push(-1);
      } else {
        index.push(stack[stack.length - 1].index);
      }
    } else {
      index.push(stack[stack.length - 1].index);
    }
    stack.push({ element: nums[i], index: i });
  }
  return index;
}

function nearestsmllesttoRight(nums) {
  let stack = [];
  let index = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      index.push(nums.length);
    } else if (stack.length > 0 && stack[stack.length - 1].element >= nums[i]) {
      while (stack.length > 0 && stack[stack.length - 1].element >= nums[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        index.push(nums.length);
      } else {
        index.push(stack[stack.length - 1].index);
      }
    } else {
      index.push(stack[stack.length - 1].index);
    }
    stack.push({ element: nums[i], index: i });
  }
  return index.reverse();
}

function widthArr(nums) {
  let right = nearestsmllesttoRight(nums);
  let left = nearestsmllesttoleft(nums);
  let width = [];
  for (let i = 0; i < nums.length; i++) {
    width[i] = right[i] - left[i] - 1;
  }
  return width;
}

function area(nums) {
  let width = widthArr(nums);
  let ans = [];
  max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    ans[i] = width[i] * nums[i];
    max = Math.max(ans[i], max);
  }
  return max;
}

const nums = [6, 2, 5, 4, 5, 1, 6];
console.log(area(nums));
