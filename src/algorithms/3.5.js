"use strict";

const array = [1,1,1,1,1,1,1,1,1,1,1,1,1,2,1];

const callBack = (acc, curr) => {
  return acc * curr;
};

const myReduce = (arr, callBack, initVal) => {
  let acc = initVal;

  arr.forEach((element) => {
    acc = callBack(acc, element);
  });

  return acc;
};

console.log(myReduce(array, callBack, 1));
