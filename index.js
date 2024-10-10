var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let map = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    if (!map[letter]) {
      return false;
    }
    map[letter]--;
  }
  return true;
};
const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t));
