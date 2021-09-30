const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((animal1) => (animal1.name === animal))
    .residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
