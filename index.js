//  Spread operator -> needs iterable like array or string
// function sum(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers));

const arr = [1, 2, 3, 4];
const sum = [...arr].reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);
