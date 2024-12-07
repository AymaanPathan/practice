function searchMultiple(nums, index, target, arr = []) {
  if (index === nums.length - 1) {
    return arr;
  }

  if (nums[index] == target) {
    arr.push(index);
  }

  return searchMultiple(nums, index + 1, target, arr);
}
const nums = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(searchMultiple(nums, 0, 1));
