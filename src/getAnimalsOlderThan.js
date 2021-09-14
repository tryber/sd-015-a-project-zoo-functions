const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((x) => x.name === animal).residents.every((y) => y.age >= age);
}

module.exports = getAnimalsOlderThan;
