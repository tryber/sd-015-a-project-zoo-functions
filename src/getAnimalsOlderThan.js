const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalsList = species.find((specie) => specie.name === animal);
  return animalsList.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
