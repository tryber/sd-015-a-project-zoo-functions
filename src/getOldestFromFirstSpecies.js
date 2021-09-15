const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalIdFound = data.employees.find((info) => info.id === id).responsibleFor[0];
  const residentsFound = data.species.find((specie) => specie.id === animalIdFound).residents;
  const oldestAnimal = residentsFound.sort((animalA, animalB) => animalB.age - animalA.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
