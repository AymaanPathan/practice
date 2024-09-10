function thirdLargest(nums) {
  if (nums.length < 3) {
    return "Array needs to have at least 3 numbers";
  }

  let largest = "";
  let secondLargest = "";
  let thirdLargest = "";

  // Find the largest number
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  // Find the second largest number
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > secondLargest && nums[i] !== largest) {
      secondLargest = nums[i];
    }
  }

  // Find the third largest number
  for (let i = 0; i < nums.length; i++) {
    if (
      nums[i] > thirdLargest &&
      nums[i] !== largest &&
      nums[i] !== secondLargest
    ) {
      thirdLargest = nums[i];
    }
  }

  return thirdLargest;
}

const arr = ["aa", "aaa", "aaaa", "a"];
console.log(thirdLargest(arr));
