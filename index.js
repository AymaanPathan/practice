function searchLinear(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][j] === target) {
        return true;
      }
    }
  }
  return false;
}
let arr = [
  [3, 12, 9],
  [5, 2, 89],
  [90, 45, 22],
];
const target = 91;
console.log(searchLinear(arr, target));
