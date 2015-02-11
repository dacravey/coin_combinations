var coinCombo = function(totalCents) {
  var results = [0,0,0,0];

  var numberOfQuarters = Math.floor(totalCents / 25);
  totalCents = totalCents - (numberOfQuarters * 25);
  var numberOfDimes = Math.floor(totalCents / 10);
  totalCents = totalCents - (numberOfDimes * 10);
  var numberOfNickles = Math.floor(totalCents / 5);
  totalCents = totalCents - (numberOfNickles * 5);

  results[0] = numberOfQuarters;
  results[1] = numberOfDimes;
  results[2] = numberOfNickles;
  results[3] = totalCents;
  return results;
};
