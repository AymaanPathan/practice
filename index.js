function maxSlidingWindow(nums, k) {
  let result = [];
  let deque = []; // Useful indexes store karega
  let start = 0,
    end = 0; // Start and End window ka track rakhenge

  while (end < nums.length) {
    // Step 1: Chhoti values hatao jo naye element se chhoti hain
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[end]) {
      deque.pop();
    }

    // Step 2: Current element ka index add karo
    deque.push(end);

    // Step 3: Window size check karo
    if (end - start + 1 == k) {
      // Window full ho gayi?
      result.push(nums[deque[0]]); // Max element (front of deque)

      // Step 4: Agar front index window se bahar ho gaya, hatao
      if (deque[0] == start) {
        deque.shift();
      }

      // Step 5: Window ko slide karo
      start++;
    }

    // Move end forward
    end++;
  }

  return result;
}

// Example Usage
let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
console.log(maxSlidingWindow(nums, k));
