const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findAnimals = data.species.find((specie) => specie.name === animal);
  return findAnimals.residents.every((exemplary) => exemplary.age >= age);
}

module.exports = getAnimalsOlderThan;
