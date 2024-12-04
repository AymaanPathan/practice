var majorityElement = function (nums) {
  let freq = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!freq[num]) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
  }
  let array = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  return Number(array[0][0]);
};

const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(arr));
