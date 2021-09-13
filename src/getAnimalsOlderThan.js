const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species
  .filter((animals) => animals.name === animal)
  .every((residents, I) => residents.residents[I].age > age);
}

module.exports = getAnimalsOlderThan;
