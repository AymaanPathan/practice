function findPeakInRotatedSortedArray(nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (end > mid && nums[mid] > nums[mid + 1]) {
      return mid;
    }
    if (start < mid && nums[mid - 1] > nums[mid]) {
      return mid - 1;
    }
    if (nums[start] >= nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function countRotation(nums) {
  let peak = findPeakInRotatedSortedArray(nums);
  return peak + 1; // if not rotated it will be -1 + 1;
}
const arr = [1, 2, 3, 4, 5];
console.log(countRotation(arr));
