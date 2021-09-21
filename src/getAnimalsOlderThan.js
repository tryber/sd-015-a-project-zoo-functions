const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, minAge) {
  const { residents } = species.find((specie) => specie.name === animal);
  return residents.every((resident) => resident.age >= minAge);
}

module.exports = getAnimalsOlderThan;
