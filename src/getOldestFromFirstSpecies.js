const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((employee) => employee.id === id)
    .responsibleFor[0];

  const array = species
    .find((specie) => specie.id === firstSpecie)
    .residents.sort((a, b) => a.age - b.age);

  const oldestAnimal = array[array.length - 1];

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
