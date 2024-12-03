var addSpaces = function (s, spaces) {
  let array = [];
  let pointer = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === spaces[pointer]) {
      array.push(" ");
      pointer++;
    }
    array.push(s[i]);
  }
  return array.join("");
};
const s = "EnjoyYourCoffee";
const spaces = [5, 9];
console.log(addSpaces(s, spaces));
