'use strict';


function spread(func, args){
    return func.apply(this, args);
}
console.log(spread(callBack, [2,true, 22]));

function callBack(...args){
    return callBack;
}