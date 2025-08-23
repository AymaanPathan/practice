// okay so we swap the element with help of stack between largest and second largest in this way our index remains same but element will be swapped the role like if we found largest' element on nums[i] we popped the smaller from stack and from popped values we found largest this will became second largest and the greatest element will on stack because we stored in decreaseing way

var find132pattern = function (nums) {
  const stack = [];
  let secondHighestMemory = -Infinity;
  for (let i = nums.length - 1; i >= 0; i--) {
    // Here check lowest with second highest
    if (nums[i] < secondHighestMemory) {
      return true;
    }

    // Here we gets second highest
    while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
      secondHighestMemory = Math.max(secondHighestMemory, stack.pop());
    }

    // Here we need to push highest
    stack.push(nums[i]);
  }
  return false;
};

const arr = [3, 1, 4, 2]; // has 132 pattern

console.log(find132pattern(arr)); // false
