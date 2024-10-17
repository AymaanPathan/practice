function findDuplicate(nums) {
  let freq = {};
  let duplicatesArr = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!freq[num]) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
    if (freq[num] === 2) {
      duplicatesArr.push(num);
    }
  }
  return duplicatesArr;
}
const nums = [1, 2, 3, 4, 4, 5, 6, 7, 8, 3, 5, 8, 1, 1];

console.log(findDuplicate(nums));
