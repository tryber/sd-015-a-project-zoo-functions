const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { residents } = data.species.find((especieAnimal) => especieAnimal.name === animal);
  return residents.every((resident) => resident.age > age);
}

module.exports = getAnimalsOlderThan;
