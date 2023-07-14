"use strict";

const countDuplicates = (str) => {
  const duplicates = str
    .toLowerCase()
    .split("")
    .filter((item, index, arr) => arr.indexOf(item) !== index);

  return duplicates.length;
};

console.log(countDuplicates("aabBcd"));
console.log(countDuplicates("ashhwq2133zxass"));
