'use strict';
const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Victor Tsoy', phone: '+030303030303030303' },
  { name: 'Niccolo Paganini', phone: '+380445554433' },
];
const findPhoneByName = name => {
  for (const obj of phonebook)
    if (obj.name === name)
      return obj.phone;
};
findPhoneByName('Victor');
module.exports = { phonebook, findPhoneByName };
