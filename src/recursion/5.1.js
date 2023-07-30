'use strict';

const sequenceSum = (begin, end, step) => {
    if(begin > end) return 0;
    let result = 0;
    for(let i = end; i >= begin; i -= step){
        console.log(result, i);
        result += i;
    }
    return result;
}

console.log(sequenceSum(2,8,2));