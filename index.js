function binarySearch(nums, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (nums[mid] === target) {
    return mid;
  }
  if (nums[mid] < target) {
    return binarySearch(nums, target, mid + 1, end);
  } else {
    return binarySearch(nums, target, start, mid - 1);
  }
}

const arr = [4, 3, 5, 7, 1, 9, 8];
console.log(binarySearch(arr, 7, 0, arr.length - 1));
