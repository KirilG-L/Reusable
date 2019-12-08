'use strict';

const range = (start, end) => {
  const arr = [];
  for (start; start <= end; start++) {
    arr.push(start);
  } return arr;
};
console.log(range(15, 30));

module.exports = { range };
