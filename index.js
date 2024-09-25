function capitalize(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const sentence = "im aymaan and a coding in mindfull place";
console.log(capitalize(sentence));
