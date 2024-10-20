function thirdMax(nums) {
  let max = -Infinity;
  let secondMax = -Infinity;
  let thridLargest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num > max) {
      max = num;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num > thridLargest && num !== secondMax && num !== max) {
      thridLargest = num;
    }
  }
  return thridLargest;
}
const arr = [4, 32, 6, 7, 62, 42];
console.log(thirdMax(arr));
