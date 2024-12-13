var merge = function (nums1, m, nums2, n) {
  let start1 = m - 1;
  let start2 = n - 1;
  let i = m + n - 1;
  while (start1 >= 0 && start2 >= 0) {
    if (nums1[start1] > nums2[start2]) {
      nums1[i] = nums1[start1];
      start1--;
    } else {
      nums1[i] = nums2[start2];
      start2--;
    }
    i--;
  }
  while (start2 >= 0) {
    nums1[i] = nums2[start2];
    start2--;
    i--;
  }
  return nums1;
};
