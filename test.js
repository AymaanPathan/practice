var LongestSubstringWithKUniqueCharacters = function (s, k) {
  let start = 0;
  let end = 0;
  let freq = {};
  let ans = 0;
  while (end < s.length) {
    let chr = s[end];
    if (!freq[chr]) {
      freq[chr] = 1;
    } else {
      freq[chr]++;
    }
    if (Object.keys(freq).length < k) {
      end++;
    } else if (Object.keys(freq).length === k) {
      ans = Math.max(ans, end - start + 1);
      end++;
    } else if (Object.keys(freq).length > k) {
      while (Object.keys(freq).length > k) {
        let startChr = s[start];
        freq[startChr]--;
        if (freq[startChr] === 0) {
          delete freq[startChr];
        }
        start++;
      }
    }
  }
  return ans;
};
const arr = "aabacbebebe";
const k = 3;

console.log(LongestSubstringWithKUniqueCharacters(arr, k));
