var findErrorNums = function (nums) {
  let arr = [];
  let freq = {};

  let sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    let num = sorted[i];
    if (!freq[num]) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
  }

  for (let i = 0; i <= sorted.length; i++) {
    let num = sorted[i];
    if (freq[num] >= 2) {
      arr.push(num);
      break;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1 && nums[i + 1] !== i + 1) {
      arr.push(i + 1);
      break;
    }
  }

  return arr;
};

const arr = [1, 1];
console.log(findErrorNums(arr));
