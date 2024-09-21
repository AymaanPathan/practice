function thirdLargest(stringArray) {
  let largest = "";
  let secondLargest = "";
  let thirdLargest = "";

  for (let i = 0; i < stringArray.length; i++) {
    let currentString = stringArray[i];

    if (currentString.length > largest.length) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = currentString;
    } else if (
      currentString.length > secondLargest.length &&
      currentString !== largest
    ) {
      thirdLargest = secondLargest;
      secondLargest = currentString;
    } else if (
      currentString.length > thirdLargest.length &&
      currentString !== largest &&
      currentString !== secondLargest
    ) {
      thirdLargest = currentString;
    }
  }
  return [largest, secondLargest, thirdLargest];
}
const arr = ["aa", "aaa", "a", "aaaaaaa"];
console.log(thirdLargest(arr));
