var isPalindrome = function (x) {
  let str = x.toString();
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
const x = 10;
console.log(isPalindrome(x));
