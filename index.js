var isHappy = function(n) {
    let slow = n;
    let fast = n;
    do{
      slow = findSquare(slow);
      fast = findSquare(findSquare(fast))
    } while(slow!==fast);
    if(slow===1){
      return true
    } else{
      return false
    }
};

function findSquare(num){
  let ans = 0;
while(num>=1){
  let lastDigit = num %10;
  ans+= lastDigit* lastDigit;
      num = Math.floor(num / 10);;
}
return ans
}
const num = 19;
console.log(isHappy(num))