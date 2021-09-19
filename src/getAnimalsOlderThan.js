const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalSearched = species.filter((specie) => specie.name === animal);
  return animalSearched[0].residents.every((being) => being.age >= age);
}

module.exports = getAnimalsOlderThan;
