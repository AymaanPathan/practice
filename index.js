var arrayStringsAreEqual = function (word1, word2) {
  const w1 = word1.join("");
  const w2 = word2.join("");
  return w1 === w2;
};
const word1 = ["a", "cb"];
const word2 = ["ab", "c"];
console.log(arrayStringsAreEqual(word1, word2));
