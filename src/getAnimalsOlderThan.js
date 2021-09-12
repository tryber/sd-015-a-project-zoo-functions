const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { residents } = species.find((e) => e.name === animal);
  return residents.every((e) => e.age > age);
}

module.exports = getAnimalsOlderThan;
