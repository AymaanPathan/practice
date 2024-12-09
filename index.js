var sortArray = function (nums) {
  if (nums.length === 1) {
    return nums;
  }
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  let leftSorted = sortArray(left);
  let rightSorted = sortArray(right);
  return merge(leftSorted, rightSorted);
};

function merge(left, right) {
  let i = 0;
  let j = 0;
  let ans = [];
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
  return ans;
}
