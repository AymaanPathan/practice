function capitalEveryOtherLetter(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let word = str[i];
    if (i % 2 === 0) {
      newStr += word.toUpperCase();
    } else {
      newStr += word.toLowerCase();
    }
  }
  return newStr;
}
const str = "HELLO";
console.log(capitalEveryOtherLetter(str));
// hello => HeLlO
