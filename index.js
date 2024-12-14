function quickSort(nums, low, high) {
  let s = low;
  let e = high;
  if (s >= e) {
    return; //  base case
  }
  let mid = Math.floor((s + e) / 2);
  let pivot = nums[mid];
  while (s <= e) {
    while (nums[s] < pivot) {
      s++;
    }
    while (nums[e] > pivot) {
      e--;
    }
    if (s <= e) {
      let temp = nums[s];
      nums[s] = nums[e];
      nums[e] = temp;
      s++;
      e--;
    }
  }
  quickSort(nums, low, e);
  quickSort(nums, s, high);
  return nums;
}
const arr = [5, 4, 3, 2, 1];
console.log(quickSort(arr, 0, arr.length - 1));
