function quickSort(nums, left, right) {
  let s = left;
  let e = right;
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
      //recheck start and end is start is greater than end than loop will end
      let temp = nums[s];
      nums[s] = nums[e];
      nums[e] = temp;
      s++;
      e--;
    }
    // finally sort two halves
    quickSort(nums, left, e);
    quickSort(nums, s, right);
  }
  return nums;
}
const arr = [5, 4, 3, 2, 1];
console.log(quickSort(arr, 0, arr.length - 1));
