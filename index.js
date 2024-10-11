var strStr = function (haystack, needle) {
  if (haystack.length < needle.length) return -1;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substr(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};

const haystack = "abc";
const needle = "c";
console.log(strStr(haystack, needle));
