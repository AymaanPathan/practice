var groupAnagrams = function (strs) {
  let occur = {};

  for (let i = 0; i < strs.length; i++) {
    let chr = strs[i].split("").sort().join("");
    if (!occur[chr]) {
      occur[chr] = [];
    }
    occur[chr].push(strs[i]);
  }
  return occur;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
