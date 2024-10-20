var intersection = function (nums1, nums2) {
  let arr = [];
  const freq = {};
  for (let i = 0; i < num1.length; i++) {
    let num = num1[i];
    if (!freq[num]) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
  }
  for (let i = 0; i < num2.length; i++) {
    let num2 = nums2[i];
    if (freq[num2]) {
      if (!arr.includes(num2)) {
        arr.push(num2);
      }
      freq[num2]--;
    }
  }
  return arr;
};

const num1 = [1, 2, 2, 1];
const num2 = [2, 2];

console.log(intersection(num1, num2));
