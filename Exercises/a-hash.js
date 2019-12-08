'use strict';
const phonebook = {
  marcus:  '+380445554433',
  victor:  '+030303030303030303',
  niccolo:  '+380445554433',
};
const findPhoneByName = name => phonebook[name];
module.exports = { phonebook, findPhoneByName };
