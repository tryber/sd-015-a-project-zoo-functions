const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const minAge = species.find((specie) => specie.name === animal);
  return minAge.residents.every((specie) => specie.age >= age);
}

console.log(getAnimalsOlderThan('frogs', '3'));

module.exports = getAnimalsOlderThan;
