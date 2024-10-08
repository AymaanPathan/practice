var reverseWords = function (s) {
  let sArray = s.trim().split(/\s+/);
  let start = 0;
  let end = sArray.length - 1;

  while (start < end) {
    let temp = sArray[start];
    sArray[start] = sArray[end];
    sArray[end] = temp;
    start++;
    end--;
  }
  return sArray.join(" ");
};
const s = "a good   example";
console.log(reverseWords(s));
