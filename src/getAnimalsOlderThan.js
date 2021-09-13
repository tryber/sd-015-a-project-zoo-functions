const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalParam = species.find((specie) => specie.name === animal);
  return animalParam.residents.every((animaldoParam) => animaldoParam.age > age);
}

module.exports = getAnimalsOlderThan;
