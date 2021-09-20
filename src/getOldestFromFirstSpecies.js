const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeId = employees.find((aux) => aux.id === id);
  const animal = species.find((aux) => aux.id === employeeId.responsibleFor[0]);
  const oldestAnimal = animal.residents.reduce((acc, curr) =>
    (acc.age > curr.age ? acc : curr), {});
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
