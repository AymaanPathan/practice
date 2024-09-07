function getMinMax(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return [min, max];
}

const arr = [3, 2, 1, 56, 10000, 167];
getMinMax(arr);
console.log(getMinMax(arr));
