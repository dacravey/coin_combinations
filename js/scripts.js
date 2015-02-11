var coinCombo = function(totalCents) {
  var results = [0,0,0,0];

  var numberOfQuarters = Math.floor(totalCents / 25);
  totalCents = totalCents - (numberOfQuarters * 25);
  var numberOfDimes = Math.floor(totalCents / 10);
  totalCents = totalCents - (numberOfDimes * 10);


  results[0] = numberOfQuarters;
  results[1] = numberOfDimes;
  return results;
};
