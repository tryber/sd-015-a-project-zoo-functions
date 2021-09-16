const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const foundSpecie = data.species.find((specie) => specie.name === animal);
  return foundSpecie.residents.every((residAge) => residAge.age >= age);
}

module.exports = getAnimalsOlderThan;
