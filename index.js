var mostCommonWord = function (paragraph, banned) {
  let freq = {};
  let str = [];
  let max = -Infinity;
  const bannedSet = new Set(banned);
  let wordArr = paragraph.toLowerCase().replace("!", "").split(/\W+/g);
  if (wordArr.length === 2 || wordArr.length === 1) {
    return wordArr[0];
  }

  for (let i = 0; i < wordArr.length; i++) {
    let word = wordArr[i];
    if (!freq[word] && !bannedSet.has(word) && word !== "") {
      freq[word] = 1;
    } else if (!bannedSet.has(word) && word !== "") {
      freq[word]++;
    }
  }

  Object.entries(freq).forEach(([key, value]) => {
    if (value >= max) {
      max = value;
      str.push(key);
    }
  });
  return str[str.length - 1];
};
const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit";
const banned = [];
console.log(mostCommonWord(paragraph, banned));
