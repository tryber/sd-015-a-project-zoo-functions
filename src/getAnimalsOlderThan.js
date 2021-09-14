const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalFound = data.species.find((specie) => specie.name === animal);
  console.log(animalFound);
  return animalFound.residents.every((resident) => resident.age > age);
}

module.exports = getAnimalsOlderThan;
