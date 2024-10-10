var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    let word = stones[i];
    if (jewels.includes(word)) {
      count++;
    }
  }
  return count;
};
const jewels = "aA";
const stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));
