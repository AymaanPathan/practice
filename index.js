var findDisappearedNumbers = function (nums) {
  let map = {};
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) {
      arr.push(i);
    }
  }
  return arr;
};

const arr = [1, 1, 2];
console.log(findDisappearedNumbers(arr));
