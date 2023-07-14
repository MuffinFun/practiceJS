"use strict";

const replaceWithAlphPositions = (str) => {
  const alphPositions = str
    .toLowerCase()
    .replace(/[^a-z-]/g, "")
    .split("")
    .map((e) => e.charCodeAt(0) - 96);

  return alphPositions;
};

console.log(replaceWithAlphPositions("The sunset sets at twelve o' clock"));
