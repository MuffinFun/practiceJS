"use strict";

const arr = [3, 30, 34, 5, 9];
const permutationsCount = function (n = arr.length) {
  return n != 1 ? n * permutationsCount(n - 1) : 1;
};
console.log(permutationsCount());

console.log(arr);
console.log(biggest(arr));
//console.log(arr.sort(() => Math.random() - 0.5));

function biggest(arr) {
  let temp = arr.slice();
  let newNumsArray = [];
  let count = permutationsCount();
  for (let i = 1; i <= count; i++) {
    let numTemp = Number(temp.sort(() => Math.random() - 0.5).join(""));
    if (newNumsArray.includes(numTemp) && newNumsArray.length != count) {
      count++;
    } else if (newNumsArray.length == count) {
      break;
    } else {
      newNumsArray.push(numTemp);
    }
  }
  return Math.max.apply(Math, newNumsArray);
}
