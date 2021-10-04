const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find((specie) => specie.name === animal)
    .residents.every((residentAge) => residentAge.age >= age);
}

module.exports = getAnimalsOlderThan;
