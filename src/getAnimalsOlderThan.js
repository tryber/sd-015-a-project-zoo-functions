const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = species.find((specie) => specie.name === animal).residents;
  const countAge = findAnimal.every((resident) => resident.age >= age);
  return countAge;
}

module.exports = getAnimalsOlderThan;
