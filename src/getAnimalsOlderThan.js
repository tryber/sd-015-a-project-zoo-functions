const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((spec) => spec.name === animal).residents.every((res) => res.age >= age);
}

module.exports = getAnimalsOlderThan;
