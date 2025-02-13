'use strict';

const square = x => x * x;
const cube = x => x ** 3;
const average = (a, b) => ((a + b) / 2);
const calculate = () => {
  const array = [];
  for (let i = 0; i <= 9; i++) {
    const result = average(square(i), cube(i));
    array.push(result);
  }
  return array;
};

module.exports = { square, cube, average, calculate };
