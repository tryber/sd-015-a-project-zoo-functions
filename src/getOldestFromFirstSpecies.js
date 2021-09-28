const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((emp) => emp.id === id);
  const animalSpecie = species.find((specie) => specie.id === employee.responsibleFor[0]);

  const funcOlderAnimal = (acc, curr) => (acc.age > curr.age ? acc : curr);
  const olderAnimal = animalSpecie.residents.reduce(funcOlderAnimal);

  return Object.values(olderAnimal);
}

module.exports = getOldestFromFirstSpecies;
