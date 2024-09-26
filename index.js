function ceiling(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return nums[mid];
    }
    if (target > nums[mid]) {
      start = mid + 1;
    }
    if (target < nums[mid]) {
      end = mid - 1;
    }
  }
  return nums[end];
}
const arr = [2, 3, 5, 9, 14, 16, 18];
console.log(ceiling(arr, 15));
