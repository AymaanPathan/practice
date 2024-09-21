//  im best => mi tseb

function reverseWord(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      let reverse = "";
      for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
      }
      return reverse;
    })
    .join(" ");
}

let sentence = "my name is aymaan";
console.log(reverseWord(sentence));
