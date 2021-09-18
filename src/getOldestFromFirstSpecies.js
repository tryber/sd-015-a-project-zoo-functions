const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((emp) => emp.id === id);
  const firstSpecie = employee.responsibleFor.find((animal) => animal[0]);
  const specieManaged = species.find((specie) => specie.id === firstSpecie);
  const residOlder = specieManaged.residents
    .reduce((bigger, resid) => (bigger.age > resid.age ? bigger : resid));

  return Object.values(residOlder);
}

module.exports = getOldestFromFirstSpecies;
