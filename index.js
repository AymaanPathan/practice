var frequencySort = function (s) {
  const freq = {};
  let str = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!freq[char]) {
      freq[char] = 1;
    } else {
      freq[char]++;
    }
  }

  const freqArray = Object.entries(freq);
  freqArray.sort((a, b) => b[1] - a[1]);

  for (let [char, count] of freqArray) {
    for (let i = 0; i < count; i++) {
      str += char;
    }
  }
  return str;
};
const s = "Aabb";
console.log(frequencySort(s));
