class Solution {
  deleteElement(arr, k) {
    let stack = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      while (
        count < k &&
        stack.length > 0 &&
        stack[stack.length - 1] < arr[i]
      ) {
        stack.pop();
        count++;
      }
      stack.push(arr[i]);
    }
    return stack;
  }
}
