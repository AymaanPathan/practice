var capitalizeTitle = function (title) {
  return title
    .split(" ")
    .map((word) => {
      if (word.length < 3) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join(" ");
};

const title = "i lOve leetcode";
console.log(capitalizeTitle(title));
