function mergeSort(nums) {
  if (nums.length === 1) {
    return nums;
  }
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid); // 0 to mid-1
  let right = nums.slice(mid); // mid to length

  let leftSort = mergeSort(left); // sort the left half
  let rightSort = mergeSort(right); // sort the right half
  return merge(leftSort, rightSort);
}

function merge(first, second) {
  let array = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      array.push(first[i]);
      i++;
    } else {
      array.push(second[j]);
      j++;
    }
    k++;
  }

  while (i < first.length) {
    array.push(first[i]);
    i++;
    k++;
  }

  while (j < second.length) {
    array.push(second[j]);
    j++;
    k++;
  }
  return array;
}
const array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array));
