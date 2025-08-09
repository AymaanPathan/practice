function next_greater_element_left(nums1, nums2) {
  let store = new Map();
  let stack = [];
  let ans = [];
  for (let i = 0; i < nums2.length; i++) {
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
  return ans
}
const nums1 = [2];
const nums2 = [2, 2, 2];
console.log(next_greater_element_left(nums1, nums2));
