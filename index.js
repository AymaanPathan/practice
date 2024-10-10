var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] >= map[s[i + 1]] || i === s.length - 1) {
      total = total + map[s[i]];
    } else {
      total = total - map[s[i]];
    }
  }
  return total;
};
const s = "III";
console.log(romanToInt(s));
