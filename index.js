var binary = function (nums, target, searchFirst) {
  let start = 0;
  let end = nums.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      ans = mid;
      if (searchFirst) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > nums[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return ans;
};
var searchRange = function (nums, target) {
  let ansArray = [-1, -1];
  const first = binary(nums, target, true);
  const last = binary(nums, target, false);
  ansArray[0] = first;
  ansArray[1] = last;
  return ansArray;
};

const arr = [5, 7, 7, 8, 8, 10];
console.log(searchRange(arr, 8));
