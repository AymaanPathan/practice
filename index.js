var maxProfit = function (prices) {
  let buy = prices[0]; // we hav to buy in day 1
  let profit = 0; // in day one profit is 0 cause buy and sell in same day
  for (let i = 0; i < prices.length; i++) {
    if (buy > prices[i]) {
      // if buying price on current day is greator than next then next day price i will buy
      buy = prices[i];
    } else {
      let currentProfit = prices[i] - buy; // else if next day price is high than next day price - today price
      profit = Math.max(currentProfit, profit);
    }
  }
  return profit;
};

const p = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(p));
