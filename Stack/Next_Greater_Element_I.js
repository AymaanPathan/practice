var nextGreaterElement = function (nums1, nums2) {
  let store = new Map();
  let stack = [];
  let ans = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      store.set(nums2[i], -1);
    } else {
      store.set(nums2[i], stack[stack.length - 1]);
    }
    stack.push(nums2[i]);
  }
  for (let i = 0; i < nums1.length; i++) {
    if (store.has(nums1[i])) {
      let value = store.get(nums1[i]);
      ans.push(value);
    }
  }
  return ans;
};
const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));
