var findWordsContaining = function (words, x) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      arr.push(i);
    }
  }
  return arr;
};
const words = ["leet", "code"];
const s = "e";
console.log(findWordsContaining(words, s));
