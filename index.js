var isAnagram = function (s, t) {
  const sArray = s.split("").sort().join("");
  const tArray = t.split("").sort().join("");
  return sArray === tArray;
};
const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t));
