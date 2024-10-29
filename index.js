var heightChecker = function (heights) {
  const duplicateArr = heights.slice();
  for (let i = 0; i < duplicateArr.length; i++) {
    for (let j = 0; j < duplicateArr.length - i - 1; j++) {
      if (duplicateArr[j] > duplicateArr[j + 1]) {
        let temp = duplicateArr[j];
        duplicateArr[j] = duplicateArr[j + 1];
        duplicateArr[j + 1] = temp;
      }
    }
  }

  let start = 0;
  let sortedStart = 0;
  let count = 0;
  while (start <= heights.length || sortedStart <= heights.length) {
    if (heights[start] !== duplicateArr[sortedStart]) {
      count++;
    }
    start++;
    sortedStart++;
  }
  return count;
};

const heights = [
  10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,
];
console.log(heightChecker(heights));
