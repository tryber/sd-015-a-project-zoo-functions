const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specieResidents = data.species.find((specie) => specie.name === animal).residents;
  return specieResidents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
