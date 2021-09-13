const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const arrayOfResidents = data.species.find((specie) => specie.name === animal);
  return arrayOfResidents.residents.every((resident) => resident.age > age);
}

module.exports = getAnimalsOlderThan;
