function reverseStr(str, index = str.length - 1) {
  if (index < 0) {
    return "";
  } else {
    return str[index] + reverseStr(str, index - 1);
  }
}
const inputStr = "hello";
const reversedStr = reverseStr(inputStr);
console.log(reversedStr);
