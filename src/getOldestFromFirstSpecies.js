const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((AllEmployees) => id === AllEmployees.id);
  const firstAnimal = findEmployee.responsibleFor[0];
  const oldestAnimal = species.find((animal) => animal.id === firstAnimal)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
