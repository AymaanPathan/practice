var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start + 1, end + 1];
    } else if (target > sum) {
      start++;
    } else {
      end--;
    }
  }
  return [-1, -1];
};
const arr = [2, 3, 4];
console.log(twoSum(arr, 6));
