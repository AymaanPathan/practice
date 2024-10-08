var firstUniqChar = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (map[letter] == 1) {
      return i;
    }
  }
  return -1;
};
const s = "leetcode";
console.log(firstUniqChar(s));
