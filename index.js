function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let count = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter]++;
    }
  }
  for (let j = 0; j < t.length; j++) {
    let letter = t[j];
    if (!count[letter]) {
      return false;
    }
    count[letter]--;
  }
  return true;
}
const s = "hello";
const l = "hello";
console.log(isAnagram(s, l));
