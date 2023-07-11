"use strict";

const alphbetized = (str) => {
  return str
    .replace(/[,.!@#\$%\^&\*()_\-]/g, "")
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
};
console.log(alphbetized("Hello!!!!!!!!!!!!!"));
