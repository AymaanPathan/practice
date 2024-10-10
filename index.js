var reverseWords = function (s) {
  return s
    .split(" ")
    .map((word) => {
      let str = "";
      for (let i = word.length - 1; i >= 0; i--) {
        str += word[i];
      }
      return str;
    })
    .join(" ");
};
const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
