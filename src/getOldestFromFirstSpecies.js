const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsible = data.employees.find((employee) => employee.id === id);
  const animal = data.species.find((specie) => specie.id === responsible
    .responsibleFor[0]).residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));

  return [animal.name, animal.sex, animal.age];
}

module.exports = getOldestFromFirstSpecies;
