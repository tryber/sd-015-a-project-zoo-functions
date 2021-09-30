const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const selectedAnimals = species.filter((specie) => specie.name === animal);
  const { residents } = selectedAnimals[0];
  const verifyAge = residents.some((resident) => resident.age < age);
  return !verifyAge;
}

module.exports = getAnimalsOlderThan;
