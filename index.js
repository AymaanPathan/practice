var bubbleSort = function (nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};

var missingNumber = function (nums) {
  bubbleSort(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return nums.length;
};

const arr = [9, 6, 4, 2, 3, 5, 7, 0, 1]; // 0,1,2,3,4,5,6,7,9
console.log("Missing Number:", missingNumber(arr));
