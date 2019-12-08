'use strict';

const fn = () => {
  const OBJ1 = { name: 'TOM' };
  let obj2 = { name: 'tom' };

  OBJ1.name = 'phone';
  obj2.name = 'phone';
  //OBJ1 = { name: 'rrrrrr' }; cant assign to const another object
  obj2 = { name: 'yyyyyy' };
};
module.exports = { fn };
