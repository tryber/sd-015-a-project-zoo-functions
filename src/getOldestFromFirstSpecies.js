const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { residents } = data.species.find((animalSpecie) => animalSpecie.name === animal);
  return residents.every((resident) => resident.age > age);
}

module.exports = getOldestFromFirstSpecies;
