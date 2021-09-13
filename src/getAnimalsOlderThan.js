const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((especie) => especie.name === animal)
    .residents.every((idadeMin) => idadeMin.age >= age);
}

module.exports = getAnimalsOlderThan;
