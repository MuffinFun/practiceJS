'use strict';

function arithmeticSwquenceSum(a, r, n){
    const seq = new Array(n).fill(null).reduce((acc, _, ind) => {
        acc[ind] = ind + 1;
        return acc;
    },[]).reduce( (acc, _, ind) => {
        console.log(a + (r*ind));
        acc.push(a + (r*ind))
        return acc;
    },[]).reduce((prev,curr) => prev + curr,0);
    console.log(seq);
}
arithmeticSwquenceSum(7,1,10)