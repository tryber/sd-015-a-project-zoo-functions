const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((specie) => specie.name === animal)
    .residents.every((animals) => animals.age >= age);
}

module.exports = getAnimalsOlderThan;
