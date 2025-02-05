/**
 * @param {number[]} nums
 * @return {number}
 */

function mergeSort(nums) {
  if (nums.length <= 1) {
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
  let ans = [];
  let i = 0;
  let j = 0;
  let count = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      ans.push(left[i]);
      i++;
    } else {
      ans.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    ans.push(left[i]);
    i++;
  }
  while (j < right.length) {
    ans.push(right[j]);
    j++;
  }
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] + 1 === ans[i + 1]) {
      count++;
    }
  }
  return ans;
}
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  const sorted = mergeSort(nums);
  let longest = 1;
  let currentLength = 1;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] + 1 === sorted[i + 1]) {
      currentLength++;
    } else if (sorted[i] !== sorted[i + 1]) {
      longest = Math.max(longest, currentLength);
      currentLength = 1;
    }
  }

  longest = Math.max(longest, currentLength);

  return longest;
};
