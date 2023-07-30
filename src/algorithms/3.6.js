'use strict'

const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;

const compose = (...fns) => (args) => fns.reduceRight((currentValue, nextFunc) => nextFunc(currentValue), args);

console.log(compose(addOne, multTwo));