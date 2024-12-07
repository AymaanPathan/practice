function isSortedWithRecursion(nums, index) {
  if (index === nums.length - 1) return true;

  return (
    nums[index] < nums[index + 1] && isSortedWithRecursion(nums, index + 1)
  );
}
const nums = [5, 3, 4];
console.log(isSortedWithRecursion(nums, 0));
