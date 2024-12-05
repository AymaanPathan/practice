var reverse = function (x) {
  const isNegative = x < 0;
  let strNumber = Math.abs(x).toString();
  let ans = "";
  for (let i = strNumber.length - 1; i >= 0; i--) {
    ans += strNumber[i];
  }
  let intAns = parseInt(ans);
  return isNegative ? -intAns : intAns;
};
const x = -123;
console.log(reverse(x));
