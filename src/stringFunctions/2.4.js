"use strict";

const romanHash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToNumber = (roman) => {
  const number = roman
    .toUpperCase()
    .split("")
    .map((e) => romanHash[e])
    .reduce((acc, curr, ind, arr) => {
      if (curr < arr[ind + 1]) acc -= curr;
      else acc += curr;
      return acc;
    }, 0);
  return number;
};
console.log(romanToNumber("CCCCCCCCxxXXXXXXXXXXxixiv"));
