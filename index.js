function reverse(str) {
  const strArray = str.split("");
  let newStr = "";
  for (let i = strArray.length - 1; i >= 0; i--) {
    newStr += strArray[i];
  }
  return newStr;
}
const str = "hello";
console.log(reverse(str));
