"use strict";

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multiplyArray = (array,multy) => {
    return array.map(e => e*multy);
}

console.log(multiplyArray(array, 3));
