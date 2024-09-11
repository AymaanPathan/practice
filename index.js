var removeDuplicates = function (nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!newArr.includes(nums[i])) {
      newArr.push(nums[i]);
    }
  }
  return newArr;
};

const arr = [1, 1, 2];
console.log(removeDuplicates(arr));
