function mergeSort(nums) {
  if (nums.length === 1) {
    return nums;
  }
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let arrIndex = 0;
  let arr = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arr.push(left[leftIndex]);
      leftIndex++;
    } else {
      arr.push(right[rightIndex]);
      rightIndex++;
    }
    arrIndex++;
  }

  while (leftIndex < left.length) {
    arr.push(left[leftIndex]);
    leftIndex++;
    arrIndex++;
  }

  while (rightIndex < right.length) {
    arr.push(right[rightIndex]);
    rightIndex++;
    arrIndex++;
  }
  return arr;
}
function binarySearchIndex(sortedArr, target) {
  let start = 0;
  let end = sortedArr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (sortedArr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}

var smallerNumbersThanCurrent = function (nums) {
  let sortedArr = mergeSort(nums);
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(binarySearchIndex(sortedArr, nums[i]));
  }
  return ans;
};
const nums = [7, 7, 7, 7];
console.log(smallerNumbersThanCurrent(nums, 2, nums.length));
