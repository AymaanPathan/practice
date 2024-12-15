var distributeCandies = function (candyType) {
  let num = [];
  let n = 0;
  let half = Math.floor(candyType.length / 2);
  let i = 0;
  let count = 0;
  while (i <= candyType.length - 1 && n < half) {
    if (!num.includes(candyType[i])) {
      num.push(candyType[i]);
      n++;
    }
    i++;
  }
  for (let i = 0; i < num.length; i++) {
    if (!num[i] !== num[i + 1]) {
      count++;
    }
  }
  return count;
};
const candyType = [6, 6, 6, 6];
console.log(distributeCandies(candyType));
