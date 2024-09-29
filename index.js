function orderAgnostic(nums, target) {
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
      if (target > nums[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(orderAgnostic(arr, 5));
