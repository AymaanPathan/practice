let stack = [];
let secondStack = [];
function push(val) {
  stack.push(val);
  if (secondStack.length === 0 || val <= secondStack[secondStack.length - 1]) {
    secondStack.push(val);
    return;
  }
}

function pop() {
  if (stack.length === 0) {
    return -1;
  }
  let poppedElement = stack.pop();
  if (
    secondStack.length > 0 &&
    poppedElement === secondStack[secondStack.length - 1]
  ) {
    secondStack.pop();
  }
}
function top() {
  if (stack.length === 0) {
    return -1;
  }
  return stack[stack.length - 1];
}

function minimum() {
  if (stack.length === 0) {
    return -1;
  }
  return secondStack[secondStack.length - 1];
}

console.log("Test Case 1:");
push(2);
push(4);
push(6);
push(8);
push(1);
console.log("Min:", minimum()); // Should print: 1
console.log("Top:", top()); // Should print: 1

console.log("Popping...");
pop(); // removes 1
console.log("Min:", minimum()); // Should print: 2

console.log("Test Case 2:");
push(0);
push(-3);
console.log("Min:", minimum()); // Should print: -3
console.log("Top:", top()); // Should print: -3

pop(); // removes -3
console.log("Min:", minimum()); // Should print: 0

console.log("Test Case 3:");
push(10);
push(10);
push(10);
console.log("Min:", minimum()); // Should print: 0

pop();
pop();
pop(); // remove all 10s
console.log("Top:", top()); // Should print: 0
console.log("Min:", minimum()); // Should still print: 0

pop(); // removes 0
console.log("Min after removing 0:", minimum()); // Should print: 2

// Reset for next test
stack = [];
secondStack = [];

console.log("Test Case 4: Empty Stack Ops");
console.log("Top:", top()); // -1
console.log("Min:", minimum()); // -1
console.log("Pop:", pop()); // -1
