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
  let i = 0;
  let j = 0;
  let indexArr = 0;
  let arr = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
    indexArr++;
  }
  while (i < left.length) {
    arr.push(left[i]);
    i++;
    indexArr++;
  }
  while (j < right.length) {
    arr.push(right[j]);
    j++;
    indexArr++;
  }
  return arr;
}

const nums = [6, 5, 3, 2, 9];
console.log(mergeSort(nums));
