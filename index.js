// reverse array
function reverse(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}

const arr = [1, 2, 3, 4, 5];

console.log(reverse(arr));
