const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((funcionario) => funcionario.id === id);
  const animal = getSpeciesByIds(employee.responsibleFor[0]);

  return Object.values(animal[0].residents.sort((a, b) => b.age - a.age)[0]);
}

module.exports = getOldestFromFirstSpecies;
