var findTheDifference = function (s, t) {
  let freq = {};
  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    if (!freq[sChar]) {
      freq[sChar] = 1;
    } else {
      freq[sChar]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    let tChar = t[i];
    if (!freq[tChar]) {
      return tChar;
    } else {
      freq[tChar]--;
    }
  }
  return " ";
};
const s = "a";
const t = "aa";
console.log(findTheDifference(s, t));
