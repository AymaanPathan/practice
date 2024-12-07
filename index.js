var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    let rev = words[i].split("").reverse().join("");
    if (rev === words[i]) return words[i];
  }
  return "";
};
const words = ["abc", "car", "ada", "racecar", "cool"];
console.log(firstPalindrome(words));
