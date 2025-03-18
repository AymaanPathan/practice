var findAnagrams = function (s, p) {
  let start = 0;
  let end = 0;
  let ans = [];
  let freq = {};

  for (let i = 0; i < p.length; i++) {
    let chr = p[i];
    if (!freq[chr]) {
      freq[chr] = 1;
    } else {
      freq[chr]++;
    }
  }

  let count = Object.keys(freq).length;

  while (end < s.length) {
    let chr = s[end];
    if (chr in freq) {
      freq[chr]--;
      if (freq[chr] === 0) {
        count--;
      }
    }
    if (end - start + 1 === p.length) {
      if (count == 0) {
        ans.push(start);
      }
      let startChar = s[start];
      if (startChar in freq) {
        if (freq[startChar] === 0) {
          count++;
        }
        freq[startChar]++;
      }
      start++;
    }
    end++;
  }
  return ans;
};
const s = "abab";
const p = "ab";
console.log(findAllAnagramCount(s, p));
