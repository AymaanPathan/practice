const stringToNumbers = (numbers) => {
  const numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return numbers.map((num) => {
    return num
      .toString()
      .split("")
      .map((num) => numberWords[num])
      .join(" ");
  });
};
const arr = [12, 21];
console.log(stringToNumbers(arr));
