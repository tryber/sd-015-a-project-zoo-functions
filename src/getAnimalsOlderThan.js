const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimal = species.find((specie) => specie.name === animal)
  return getAnimal.residents.every((paramAnimal) => paramAnimal.age >= age)
}

module.exports = getAnimalsOlderThan;
