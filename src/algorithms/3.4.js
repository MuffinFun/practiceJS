'use strict';

const array = [1, 3, 8, 1, 8];

const uniqueSum = (array) => {
    const mySet = new Set(array);
    
    const uniqArray = Array.from(mySet);

    return uniqArray.reduce((acc,curr) => acc+curr,0);
}

console.log(uniqueSum(array));