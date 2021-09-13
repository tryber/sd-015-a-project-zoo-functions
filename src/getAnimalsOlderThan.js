const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const speciesResidents = species.find((elm) => elm.name === animal).residents;
  return speciesResidents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
