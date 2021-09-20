const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

const { employees } = data;

function getOldestFromFirstSpecies(id) {
  const currEmployee = employees.find((whichEmployee) => whichEmployee.id === id);
  const employeeFirstSpecie = getSpeciesByIds(currEmployee.responsibleFor[0])[0];
  const oldestAnimal = employeeFirstSpecie.residents.sort((animalA, animalB) =>
    animalB.age - animalA.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
