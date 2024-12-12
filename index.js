var lengthOfLongestSubstring = function (s) {
  let count = 0;
  let str = "";
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (!str.includes(s[i])) {
      str += s[i];
      count++;
      max = Math.max(max, count);
    } else {
      let index = str.indexOf(s[i]);
      str = str.slice(index + 1) + s[i];
      count = str.length;
    }
  }
  return max;
};
const s = "bbbbb";
console.log(lengthOfLongestSubstring(s));
