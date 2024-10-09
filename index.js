var longestCommonPrefix = function (strs) {
  strs.sort();
  let prefixStr = "";
  let start = strs[0];
  let end = strs[strs.length - 1];
  for (let i = 0; i < strs.length; i++) {
    if (start[i] === end[i]) {
      prefixStr += start[i];
    }
  }
  return prefixStr;
};
const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
