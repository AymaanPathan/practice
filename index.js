var mergeAlternately = function (word1, word2) {
  let i = 0;
  let j = 0;
  let k = 0;
  let str = "";
  while (i < word1.length && j < word2.length) {
    if ((k + 1) % 2 === 0) {
      str += word2[j];
      j++;
      k++;
    } else {
      str += word1[i];
      i++;
      k++;
    }
  }
  while (j < word2.length) {
    str += word2[j];
    j++;
    k++;
  }

  while (i < word1.length) {
    str += word1[i];
    i++;
    k++;
  }
  return str;
};
const word1 = "abcd";
const word2 = "pq";
console.log(mergeAlternately(word1, word2));
