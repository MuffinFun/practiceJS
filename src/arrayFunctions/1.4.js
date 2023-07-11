"use strict";

function pattern(n) {
  let temp = new Array(n)
  return temp.fill(null).reduce((prev,_,ind) => {
    prev[ind] = ind + 1;
    return prev;
  },[]).reduce((prev, _, ind, arr) => { // arr =[1,2,3,4,5]
    prev.push(arr.slice(ind, arr.length).join('') + arr.slice(0,ind).join(''))
    return prev;
  },[]);
}
console.log(pattern(5));
