// Map

//1. double the value of [5,1,3,2,6]

const arr = [5, 1, 3, 2, 6];

const doubledArray = arr.map(function (num) {
  return num * 2;
});

console.log(doubledArray);

//2. Triple the value of [5,1,3,2,6]

const arr1 = [5, 1, 3, 2, 6];

const TripledArray = arr.map(function (num) {
  return num * 3;
});
console.log(TripledArray);

//3. binary of [5,1,3,2,6]

const arr3 = [5, 1, 3, 2, 6];
const binaryArray = arr3.map(function (num) {
  return num.toString(2);
});

console.log(binaryArray);
