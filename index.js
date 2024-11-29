var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else {
      let currentProfit = prices[i] - buy;
      profit = Math.max(currentProfit, profit);
    }
  }
  return profit;
};
