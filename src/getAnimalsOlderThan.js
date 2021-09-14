const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalName = species.find((specie) => specie.name === animal);
  const oldAge = animalName.residents
    .every((resident) => resident.age >= age);
  return oldAge;
}

module.exports = getAnimalsOlderThan;
