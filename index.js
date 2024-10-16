var lengthOfLastWord = function (s) {
  let str = "";
  s.trim()
    .split(" ")
    .slice(-1)
    .map((word) => {
      str += word;
    });
  return str.length;
};

const s = "luffy is still joyboy";
console.log(lengthOfLastWord(s));
