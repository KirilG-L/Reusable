'use strict';

const rangeOdd = (start, end) => {
  const arr = [];
  for (let n = start; n <= end; n++) {
    if (n % 2 !== 0) {
      arr.push(n);
    }
  }
  return arr;
};
console.log(rangeOdd(15, 30));

module.exports = { rangeOdd };
