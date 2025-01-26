var reversePrefix = function (word, ch) {
  let stack = [];
  let isCh = false;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    stack.push(char);
    if (char === ch) {
      isCh = true;
      break;
    }
  }
  if (!isCh) return word;
  let reversedPart = stack.reverse().join("");
  return reversedPart + word.slice(stack.length);
};
