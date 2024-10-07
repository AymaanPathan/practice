function countOccurence(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    if (!map[number]) {
      map[number] = 1;
    } else {
      map[number]++;
    }
  }
  return map;
}
const arr = [1, 2, 3, 4, 1, 2, 3, 3];
console.log(countOccurence(arr));
