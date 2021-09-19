const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { employees, species } = data;
  const employeeFirstsId = employees.find((element) => element.id === id).responsibleFor[0];
  const specie = species.find((element) => element.id === employeeFirstsId);
  const getOldest = specie.residents.reduce((oldest, current) =>
    (oldest.age > current.age ? oldest : current));

  return Object.values(getOldest);
}

module.exports = getOldestFromFirstSpecies;
