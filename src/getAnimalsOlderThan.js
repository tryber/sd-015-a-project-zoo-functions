const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// www.youtube.com/watch?v=szXPNFjVKzI&t=125s, mentoria e git Pedro Guarize, every couse.

const getAnimalsOlderThan = (animal, age) => species
  .find((nameAnimal) => nameAnimal.name === animal).residents
  .every((veryAge) => veryAge.age > age);

module.exports = getAnimalsOlderThan;
