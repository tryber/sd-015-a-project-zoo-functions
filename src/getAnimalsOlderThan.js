const {
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((type) => type.name === animal).residents
    .every((yearsOld) => yearsOld.age >= age);
}

module.exports = getAnimalsOlderThan;
