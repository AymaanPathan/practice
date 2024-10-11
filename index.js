var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  for (let i = 0; i < haystack.length - needle.length; i++) {
    if (haystack.slice(0, needle.length) === needle) {
      return i;
    }
  }
  return -1;
};
const haystack = "sadbutsad";
const needle = "sad";
console.log(strStr(haystack, needle));
