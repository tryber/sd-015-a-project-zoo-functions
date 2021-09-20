const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const qualquer = species.find((bestera) => bestera.name === animal);
  return qualquer.residents.every((resident) => resident.age >= age);
}
module.exports = getAnimalsOlderThan;
