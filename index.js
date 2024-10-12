var arrayStringsAreEqual = function (word1, word2) {
  let word1Str = "";
  let word2Str = "";
  for (let i = 0; i < word1.length; i++) {
    word1Str += word1[i];
  }
  for (let i = 0; i < word2.length; i++) {
    word2Str += word2[i];
  }
  return word1Str === word2Str;
};

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
console.log(arrayStringsAreEqual(word1, word2));
