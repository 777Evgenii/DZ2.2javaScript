"use strict";

function solveEquation(a, b, c) {
  
  let d = Math.pow(b, 2) - 4 * a * c;
  
  if (d < 0) {
    return [];
  } else if (d == 0) {
    let x1 = -b / (2 * a);
    return [x1];
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }
}

let result = solveEquation(1, -4, -5);

console.log(result);
