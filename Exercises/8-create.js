'use strict';

const createUser = (name, city) => ({ name, city });
createUser('Marcus', 'Kiev');
module.exports = { createUser };
