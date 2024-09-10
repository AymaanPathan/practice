function secondLargest(nums) {
  let largest = nums[0];
  let secondLargest = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > secondLargest && nums[i] !== largest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
}

function secondSmallest(nums) {
  let smallest = nums[0];
  let secondSmallest = Infinity;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
    }
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < secondSmallest && nums[i] !== smallest) {
      secondSmallest = nums[i];
    }
  }
  return secondSmallest;
}

const arr = [1, 2, 3, 4, 5];
console.log(secondLargest(arr));
console.log(secondSmallest(arr));
