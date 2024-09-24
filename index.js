function removeDuplicates(nums) {
  let uniqueIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueIndex] = nums[i];
      uniqueIndex++;
    }
  }
  return uniqueIndex;
}
const arr = [1, 2, 3, 3, 4, 5]; //[1,2,3,4,5]
console.log(removeDuplicates(arr));
