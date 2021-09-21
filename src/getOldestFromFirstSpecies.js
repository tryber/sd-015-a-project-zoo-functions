const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const emplyee = data.employees.find((worker) => worker.id === id);
  const resident = data.species.find((findSpecie) => emplyee.responsibleFor[0] === findSpecie.id);
  const sortOlder = resident.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(sortOlder);
}

module.exports = getOldestFromFirstSpecies;
