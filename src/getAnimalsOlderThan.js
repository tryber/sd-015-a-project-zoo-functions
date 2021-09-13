const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const selected = data.species.find((element) => element.name === animal);
  return selected.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
