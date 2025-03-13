function findSubarraysSlidingWindow(arr, k) {
  let window = [];
  let ans = [];
  for (let i = 0; i < k; i++) {
    window.push(arr[i]);
  }
  ans.push([...window]);

  for (let i = k; i < arr.length; i++) {
    window.shift();
    window.push(arr[i]);
    ans.push([...window]);
  }
  return ans;
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
let k = 2;
console.log(findSubarraysSlidingWindow(arr, k));
