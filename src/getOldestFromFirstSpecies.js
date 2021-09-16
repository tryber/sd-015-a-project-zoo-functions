const data = require('../data/zoo_data');

const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployeeSpecie = employees.find((employee) =>
    employee.id === id).responsibleFor[0];

  const firstSpecie = species.find((specie) => specie.id === findEmployeeSpecie).residents;

  const oldestAnimal = firstSpecie.sort((a, b) => b.age - a.age)[0];

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
