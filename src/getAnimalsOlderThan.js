const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.every((value) => (value.name === animal && value.residents.age > age));
};

module.exports = getAnimalsOlderThan;
