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
}

const arr = [4, 5, 6, 7, 0, 1, 2];
console.log(findPeakInRotatedSortedArray(arr));
