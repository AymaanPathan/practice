var LongestSubstringwithAtMostKDistinctCharacters = function (s, k) {
  let start = 0;
  let end = 0;
  let freq = {};
  let max = -Infinity;
  while (end < s.length) {
    let chr = s[end];
    if (!freq[chr]) {
      freq[chr] = 1;
    } else {
      freq[chr]++;
    }
    if (Object.keys(freq).length < k) {
      max = Math.max(max, end - start + 1); // edge case
      end++;
    } else if (Object.keys(freq).length === k) {
      max = Math.max(max, end - start + 1);
      end++;
    } else if (Object.keys(freq).length > k) {
      while (Object.keys(freq).length > k) {
        let sChar = s[start];
        freq[sChar]--;
        if (freq[sChar] === 0) {
          delete freq[sChar];
        }
        start++;
      }
      end++;
    }
  }
  return max;
};
const s = "abc";
const k = 5;

console.log(LongestSubstringwithAtMostKDistinctCharacters(s, k));
