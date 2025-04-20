var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let ans = [];
  let map = {};
  for (let i = nums2.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      if (nums1.includes(nums2[i])) {
        map[nums2[i]] = -1;
      }
    } else if (stack.length > 0 && stack[stack.length - 1] >= nums2[i]) {
      if (nums1.includes(nums2[i])) {
        map[nums2[i]] = stack[stack.length - 1];
      }
    } else if (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
      while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        map[nums2[i]] = -1;
      } else if (nums1.includes(nums2[i])) {
        map[nums2[i]] = stack[stack.length - 1];
      }
    }
    stack.push(nums2[i]);
  }
  for (i = 0; i < nums1.length; i++) {
    ans.push(map[nums1[i]]);
  }
  return ans;
};
const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));
