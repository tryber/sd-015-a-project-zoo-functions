const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.species.find((specie) => specie.name === animal).residents;
  return animals.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
