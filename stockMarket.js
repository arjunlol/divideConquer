function maxProfit(dailyStockPrice){
  var profits = [];
  var highestVal = 0;
  for (var i = 0; i < dailyStockPrice.length - 2; i ++){
    for (var j = i + 1; j < dailyStockPrice.length -1; j++)
      if (dailyStockPrice[j] >= highestVal){
        highestVal = dailyStockPrice[j];
      }

    profits[i] = highestVal - dailyStockPrice[i];
  }
  highestVal = 0
  for (var val of profits){
    if (val > highestVal){
      highestVal = val;
    }
  }
  return highestVal;
}

var arr = [45,24,35,31,40,38,11];
console.log(maxProfit(arr));