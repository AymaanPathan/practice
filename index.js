function convertNumbersToWords(numbers) {
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

  return numbers.map((num) => numberWords[num]).join("_");
}

const arr = [1, 2, 3];
console.log(convertNumbersToWords(arr));
