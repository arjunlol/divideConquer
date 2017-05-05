
function maxProfit(dailyStockPrice){

  if (dailyStockPrice.length <= 1){
    return 0;
  }

  var leftSide = dailyStockPrice.slice(0, dailyStockPrice.length/2);
  var rightSide = dailyStockPrice.slice(dailyStockPrice.length/2, dailyStockPrice.length);

  var leftBest = maxProfit(leftSide);
  var rightBest = maxProfit(rightSide);

  var crossBest = Math.max.apply(null,rightSide)- Math.min.apply(null,leftSide);

  return Math.max(leftBest,rightBest,crossBest);

  // var profits = [];
  // var highestVal = 0;
  // for (var i = 0; i < dailyStockPrice.length - 2; i ++){
  //   for (var j = i + 1; j < dailyStockPrice.length -1; j++)
  //     if (dailyStockPrice[j] >= highestVal){
  //       highestVal = dailyStockPrice[j];
  //     }

  //   profits[i] = highestVal - dailyStockPrice[i];
  // }
  // highestVal = 0
  // for (var val of profits){
  //   if (val > highestVal){
  //     highestVal = val;
  //   }
  // }
  // return highestVal;
}

var arr = [45,24,35,31,40,38,11];
console.log(maxProfit(arr));