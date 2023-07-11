'use strict';

const arr = [3, 2, 6, 8, 2, 3];

console.log(arr);
console.log(maxTripleSum(arr));
console.log(arr);

function maxTripleSum(arr) {
    return arr.slice().sort((a,b) => b - a).slice(0,3).reduce((p,c) => p+c,0);
}