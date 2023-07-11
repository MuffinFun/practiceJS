"use strict";

const arr = [
  [11, 12, 4, 1],
  [2, 22, 2, 1],
  [10, 5, 7, 1],
  [1, 1, 1, 1],
];

sumAverage(arr);
console.log(arr);

function sumAverage(arr) {
  const result = arr.map((item) => {
    return item.reduce((prev, curr) => prev + curr, 0) / item.length;
  });
  console.log(result);
  console.log(Math.floor(result.reduce((prev, curr) => prev + curr, 0)));
  return Math.floor(result.reduce((prev, curr) => prev + curr, 0));
}
