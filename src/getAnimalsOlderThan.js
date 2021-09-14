const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const nameAnimal = species.find((AniamlSpecie) => AniamlSpecie.name === animal);
  return nameAnimal.residents.every((animalAge) => animalAge.age >= age);
}

module.exports = getAnimalsOlderThan;
