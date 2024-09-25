function orderAgnosticBinarySearch(nums, target) {
  // when we dont know if array is decs or asc
  let start = 0;
  let end = nums.length - 1;
  let isAscending;
  if (nums[start] < nums[end]) {
    isAscending = true;
  } else {
    isAscending = false;
  }
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (isAscending) {
      if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (nums[mid] < target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
}
const arr = [6, 5, 4, 3, 2, 1];
console.log(binarySearch(arr, 2));
