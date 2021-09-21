const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalSelector = species.find((exemplar) => exemplar.name === animal).residents;
  const animalOld = animalSelector.every((animAge) => animAge.age >= age);
  return animalOld;
}

module.exports = getAnimalsOlderThan;
