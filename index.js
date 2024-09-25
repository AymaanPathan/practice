function sumAllMatrix(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      sum += nums[i][j];
    }
  }
  return sum;
}
let arr = [
  [3, 12, 9],
  [5, 2, 89],
  [90, 45, 22],
];
const target = 91;
console.log(sumAllMatrix(arr));
