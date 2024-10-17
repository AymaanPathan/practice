var findTheDifference = function (s, t) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    let num = s[i];
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }
  for (let j = 0; j < t.length; j++) {
    let tNum = t[j];
    if (!map[tNum]) {
      return tNum;
    }
  }
  for (let j = 0; j < t.length; j++) {
    let tNum = t[j];
    if (!map[tNum]) {
      return tNum;
    } else {
      map[tNum]--;
      if (map[tNum] === -1) {
        return map;
      }
    }
  }
  return " ";
};
const s = "aa";
const t = "a";
console.log(findTheDifference(s, t));
