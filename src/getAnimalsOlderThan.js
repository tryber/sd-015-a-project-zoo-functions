const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((specie) => specie.name === animal);
  const residentAge = animals.residents.every((resident) => resident.age >= age);
  return residentAge;
}
module.exports = getAnimalsOlderThan;
