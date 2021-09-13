const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const speciesResidents = data.species.find((elm) => elm.name === animal).residents;
  return speciesResidents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
