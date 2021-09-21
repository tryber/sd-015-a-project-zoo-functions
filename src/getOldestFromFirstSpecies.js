const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getEmployee = employees.find((employee) => employee.id === id);
  const getAnimal = species.find((specie) => specie.id === getEmployee.responsibleFor[0]).residents;
  const getOldest = getAnimal.reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr));
  return Object.values(getOldest);
}

module.exports = getOldestFromFirstSpecies;
