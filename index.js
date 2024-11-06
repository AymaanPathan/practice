var findDuplicate = function (nums) {
  let map = {};
  let ans;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
    if (map[num] > 1) {
      ans = num;
    }
  }
  return ans;
};

const arr = [1, 3, 4, 2, 2];
console.log(findDuplicate(arr));
