const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((theAnimal) => theAnimal.name === animal);
  return specie.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
