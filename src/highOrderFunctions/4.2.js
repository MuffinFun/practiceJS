"use strict";

const arr1 = [10, 10, 10];
const arr2 = [0, 1, 2, 3, 2, 3, 4, 5, 6, 7, 7, 8];

function mathPowFunc(arrOne, arrTwo) {
  let resultArr = [];
  const length = arrOne.length > arrTwo.length ? arrTwo.length : arrOne.length;

  for (let i = 0; i < length; i++) {
    resultArr.push(Math.pow(arrOne[i], arrTwo[i]));
  }
  return resultArr;
}

const zipWith = (func, arr1, arr2) => {
  return func(arr1, arr2);
};

console.log(zipWith(mathPowFunc, arr1, arr2));
