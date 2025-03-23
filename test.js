var numOfSubarrays = function (arr, k, threshold) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let ans = 0;
  while (end < arr.length) {
    sum = sum + arr[end];
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      if (sum / k >= threshold) {
        ans++;
      }
      sum = sum - arr[start];
      start++;
      end++;
    }
  }
  return ans;
};

const arr = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3];
const k = 3;
const threshold = 5;
console.log(numOfSubarrays(arr, k, threshold));
