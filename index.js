var plusOne = function (digits) {
  const Array = [];

  let digitAns = "";
  for (let i = 0; i < digits.length; i++) {
    let digitStr = digits[i].toString();
    digitAns += digitStr;
  }

  let ans = [BigInt(digitAns) + BigInt(1)];
  let strans = ans.toString();
  let sArray = strans.split("");
  for (let i = 0; i < sArray.length; i++) {
    Array.push(Number(sArray[i]));
  }
  return Array;
};
const digits = [9];
console.log(plusOne(digits));
