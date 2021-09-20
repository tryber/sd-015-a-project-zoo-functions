const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((element) => element.id === id).responsibleFor[0];

  const specie = species.find((element) => element.id === employee);

  const olderAnimal = specie.residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));

  return Object.values(olderAnimal);
}

module.exports = getOldestFromFirstSpecies;
