// Reduce

//1. sum of all [5,1,3,2,6]

const arr = [5, 1, 3, 2, 6];
const sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// console.log(sum);

// 0+5 = 5
// 5+1 =6
// 6+3 = 9
// 9+2=11
// 11+6 = 17 will be output

// 2 find max [with for loop]
function findMax() {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax());

// with reduce

const maxNum = arr.reduce((acc, curr) => {
  if (acc < curr) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(maxNum);
