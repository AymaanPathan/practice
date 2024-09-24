function Reverse(nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
  return nums;
}
function Leaders(nums) {
  let newArr = [];
  let maxLeader = nums[nums.length - 1];
  newArr.push(maxLeader);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > maxLeader) {
      newArr.push(nums[i]);
      maxLeader = nums[i];
    }
  }
  return Reverse(newArr);
}

const arr = [16, 17, 4, 3, 5, 2];
console.log(Leaders(arr));
