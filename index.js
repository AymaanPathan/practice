var splitWordsBySeparator = function (words, separator) {
  return words
    .join(separator)
    .split(separator)
    .filter((val) => val != "");
};

const words = ["|||"];
const separator = "|";
console.log(splitWordsBySeparator(words, separator));
