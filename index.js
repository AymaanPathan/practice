var secondLargest = function (arr) {
  let max = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondLargest = max;
      max = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== max) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(secondLargest(arr));
