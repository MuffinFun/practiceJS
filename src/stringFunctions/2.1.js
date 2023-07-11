"use strict";

// const toMachineName = (name, separator) => {
//   const regEx = /, /gi;
//   return name
//     .replace(regEx, " ")
//     .split(" ")
//     .map((e, _, arr) => {
//       e.toLowerCase();
//     })
//     .join(separator);
// };
// console.log(toMachineName("Hello, my name is Andrew", "-"));

const toMachine = (name, separator) => {
  return name
    .replace(/^\d+/, " ")
    .trim()
    .replace(/[,.\/!@#$%\^&\*()\-_=`~;:]/g, "")
    .replace(/ +/g, separator);
};
console.log(toMachine("3 bas@ic%s        and 1 adv$an#ce", "-"));
