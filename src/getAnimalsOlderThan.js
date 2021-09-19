const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const findAnimal = species.find((e) => e.name === animal);
  const { residents } = findAnimal;
  return residents.every((e) => e.age >= age);
}

module.exports = getAnimalsOlderThan;
