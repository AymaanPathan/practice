function searchLinear(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      return nums[j][i];
    }
  }
}
let arr = [
  [3, 12, 9],
  [5, 2, 89],
  [90, 45, 22],
];
console.log(searchLinear(arr));
