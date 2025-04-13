let stack = [];
let supportingStack = [];
function pushStack(a) {
  stack.push(a);
  if (
    supportingStack.length == 0 ||
    supportingStack[supportingStack.length - 1] >= a
  ) {
    supportingStack.push(a);
    return;
  }
}
function popStack() {
  if (stack.length === 0) {
    return -1;
  }
  let ans = stack.pop();
  if (ans === supportingStack[supportingStack.length - 1]) {
    supportingStack.pop();
  }
}
function findMin() {
  if (supportingStack.length === 0) {
    return -1;
  }
  return supportingStack[supportingStack.length - 1];
}
