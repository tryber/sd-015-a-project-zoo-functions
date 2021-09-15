const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getAnimal = species.find((specie) => specie.name === animal);
  const isOlderThan = getAnimal.residents.every((resident) => resident.age > age);
  return isOlderThan;
}

module.exports = getAnimalsOlderThan;
