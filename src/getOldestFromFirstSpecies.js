const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const selectedEmployee = employees.find((employee) => employee.id === id);
  const firstSpecie = species.find((specie) => specie.id === selectedEmployee.responsibleFor[0]);
  const oldestAnimal = firstSpecie.residents.sort((a, b) => b.age - a.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
