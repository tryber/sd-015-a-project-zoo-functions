const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
  return findAnimal;
}

module.exports = getAnimalsOlderThan;
