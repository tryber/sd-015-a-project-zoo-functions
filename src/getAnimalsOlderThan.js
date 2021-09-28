const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalFinder = data.species.find((specie) => specie.name === animal);
  const animalFinderAge = animalFinder.residents.every((resident) => resident.age >= age);
  return animalFinderAge;
}

module.exports = getAnimalsOlderThan;
