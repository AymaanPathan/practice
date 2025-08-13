var removeKdigits = function (num, k) {
  let stack = [];
  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  let result = "";
  let iskipLeadingZeros = true;

  for (let i = 0; i < stack.length; i++) {
    if (iskipLeadingZeros && stack[i] === "0") {
      continue;
    }
    iskipLeadingZeros = false;
    result += stack[i];
  }

  return stack;
};

const arr = "1432219";
const k = 3;
console.log(removeKdigits(arr, k));
