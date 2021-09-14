const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => species.find((anim) => anim.name === animal).residents
  .every((resident) => resident.age > age);

module.exports = getAnimalsOlderThan;
