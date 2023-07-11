"use strict";

const array = [
  [5, 9, 1, 0],
  [8, 7, 2, 3],
  [1, 4, 1, 9],
  [1, 4, 1, 9],
];

function diagonalSum(matrix) {
  const forCheckMatrix = matrix.flat();
  if (matrix.length != (forCheckMatrix.length/matrix.length)) return "not a square matrix";
  return matrix.reduce((prev, curr, ind) => {
    console.log(prev + "+" + curr[ind]);
    return prev + curr[ind];
  }, 0);
}
console.log(diagonalSum(array));
