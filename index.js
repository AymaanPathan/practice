var isAnagram = function (s, t) {
  let occurence = {};
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!occurence[char]) {
      occurence[char] = 1;
    } else {
      occurence[char]++;
    }
  }
  for (let j = 0; j < t.length; j++) {
    let tChar = t[j];
    if (!occurence[tChar]) {
      return false;
    } else {
      occurence[tChar]--;
    }
  }
  return true;
};

const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t));
