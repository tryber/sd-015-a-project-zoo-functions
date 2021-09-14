const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((e) => e.id === id);
  const specieId = employee.responsibleFor[0];
  const specie = species.find((e) => e.id === specieId);
  const older = specie.residents.sort((a, b) => (b.age > a.age ? 1 : -1))[0];
  return [older.name, older.sex, older.age];
}

module.exports = getOldestFromFirstSpecies;
