function searchWithRecursion(nums, index, target) {
  if (nums[index] == target) {
    return index;
  } else if (index === nums.length - 1) return -1;
  return searchWithRecursion(nums, index + 1, target);
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(searchWithRecursion(nums, 0, 1));
