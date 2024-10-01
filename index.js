function searchinMatrix(nums, target) {
  for (let row = 0; row < nums.length; row++) {
    for (let col = 0; col < nums[row].length; col++) {
      if (target === nums[row][col]) {
        return [row, col];
      }
    }
  }
  return [-1, -1];
}
const arr = [[1, 2, 3, 4, 5, 6]];
console.log(searchinMatrix(arr, 3));
