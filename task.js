"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let monthLoanFee = S * (P + (P / ((Math.pow(1 + P, countMonths)) - 1)));

  return (monthLoanFee * countMonths).toFixed(2);
}

function testCase(num) {
  let input = [
    [10, 0, 50000, 12],
    [10, 1000, 50000, 12],
    [10, 0, 20000, 24],
    [10, 1000, 20000, 24],
    [10, 20000, 20000, 24],
    [10, 0, 10000, 36],
    [15, 0, 10000, 36]
  ];

  let result = [
    52749.53,
    51694.54,
    22149.56,
    21042.09,
    0,
    11616.19,
    12479.52
  ];

  let m = input[num];
  
  return calculateTotalMortgage(m[0], m[1], m[2], m[3]) == result[num]; 
}

for (let i = 0; i < 6; i++) {
  console.log("#" + (i + 1) + ": " + (testCase(i) ? "Верно" : "Неверно"));
}