const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findSpecie = species.find((specie) => specie.name === animal);
  const olderThan = findSpecie.residents.every((resident) => resident.age >= age);
  return olderThan;
}
console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
