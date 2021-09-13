const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animalFinder = species.find((specie) => specie.name === animal);
  return animalFinder.residents.every((currentAnimal) => currentAnimal.age >= age);
}

module.exports = getAnimalsOlderThan;
