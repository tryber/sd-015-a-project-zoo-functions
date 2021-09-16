const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecieId = data.employees.find((person) => person.id === id)
    .responsibleFor[0];

  const firstSpecieResidentsOlder = data.species.find((specie) => specie.id === firstSpecieId)
    .residents.sort((young, old) => old.age - young.age)[0];

  return Object.values(firstSpecieResidentsOlder);
}

module.exports = getOldestFromFirstSpecies;
