const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const chosenSpecie = data.species.find((specie) => specie.name === animal);
  return chosenSpecie.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
