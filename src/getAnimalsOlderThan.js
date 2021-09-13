const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const allAnimals = species.find((objeto) => objeto.name === animal);
  return allAnimals.residents.every((elemento) => elemento.age >= age);
}

module.exports = getAnimalsOlderThan;
