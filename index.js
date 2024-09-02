// Filter

// 1 find out all odd number from [5,1,3,2,6]

const arr = [5, 1, 3, 2, 6];
const oddOnes = arr.filter((num) => num % 2);

console.log(oddOnes);

// when we use num % 2===0 it will filtered out all even number
// because all numbers should ne divisible by 2 and the remainder
// should always be 0

// when we user num%2 it will filtered out all odd number
// because all number should be divisible by 2 and
// not remainder will not be 0
// and in js 0 is a false val so  filter function provides
// true value only and it will ignore 0 coz its falsy
// for example 3 % 2 it will give a remainder 1.5
// for example 2%2 it will give remainder 0 so the filter
// will ignore it and will not put in array

// 2 find out all even number from [5,1,3,2,6]

const arr2 = [5, 1, 3, 2, 6];
const evenOnes = arr.filter((num) => num % 2 === 0);

console.log(evenOnes);

// 2 find out all number which is graeater than 4 [5,1,3,2,6]

const arr3 = [5, 1, 3, 2, 6];
const greaterThanFour = arr.filter((num) => num > 4);

console.log(greaterThanFour);
