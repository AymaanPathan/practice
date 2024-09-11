function occurenceOfNumber(number, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      count++;
    }
  }
  return count;
}

const arr = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 3];
console.log(occurenceOfNumber(3, arr));
