var isAcronym = function (words, s) {
  let str = "";
  for (let i = 0; i < words.length; i++) {
    str += words[i].charAt(0);
  }
  return str === s;
};
const words = ["alice", "bob", "charlie"];
const s = "abc";
console.log(isAcronym(words, s));
