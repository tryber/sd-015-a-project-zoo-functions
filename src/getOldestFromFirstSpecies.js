const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const empl = employees.find((employee) => employee.id === id).responsibleFor;
  const anim = species.find((specie) => specie.id === empl[0]).residents;
  return Object.values(anim.reduce((acc, actu) => ((acc.age < actu.age) ? actu : acc)));
}

module.exports = getOldestFromFirstSpecies;
