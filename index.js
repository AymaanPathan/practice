function reverseStringUsingStack(str) {
  // Initialize an empty stack
  let stack = [];

  // Push all characters of the string onto the stack
  for (let char of str) {
    stack.push(char);
  }

  // Pop characters from the stack to reverse
  let reversedStr = "";
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

// Test the function
const inputStr = "hello";
console.log("Original String:", inputStr);
console.log("Reversed String:", reverseStringUsingStack(inputStr));
