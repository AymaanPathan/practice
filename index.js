var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }

  let i = 0;

  while (i < arr.length - 1 && arr[i] < arr[i + 1]) {
    //check increasing
    i++;
  }

  if (i === 0 || i === arr.length - 1) {
    // if i is check increasing and reach to end this is will be not valid
    return false;
  }

  while (i < arr.length - 1 && arr[i] > arr[i + 1]) {
    // otherwise check in decreasing part
    i++;
  }
  return i == arr.length - 1;
};
const arr = [0, 3, 2, 1];
console.log(validMountainArray(arr));
