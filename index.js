function palindrome(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str.charAt(start) !== str.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
const str = "A man, a plan, a canal: Panama";
console.log(palindrome(str));
