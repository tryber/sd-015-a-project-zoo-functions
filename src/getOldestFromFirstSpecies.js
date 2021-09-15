const data = require('../data/zoo_data');
const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((emp) => emp.id === id);
  const animalSpecie = species.find((specie) => specie.id === employee.responsibleFor[0]);
  const oldest = animalSpecie.residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
