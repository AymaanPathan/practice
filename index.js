var detectCapitalUse = function (word) {
  let endLetter = word[word.length - 1];
  if (word === word.toUpperCase()) {
    // check if All Char in  word is uppercase or not
    return true;
  }

  if (word === word.toLowerCase()) {
    // check if All Char in  word is lowercase or not
    return true;
  }
  if (endLetter === endLetter.toUpperCase()) {
    // check if Last Char in  word is uppercase or not
    return false;
  }

  if (
    // check if First Char in  word is uppercase and all other character is loweCase
    word[0] === word[0].toUpperCase() &&
    word.slice(1) === word.slice(1).toLowerCase()
  ) {
    return true;
  }
  return false;
};

const word = "FFFFFFFFFFFFFFFFFFFFf";

console.log(detectCapitalUse(word));
