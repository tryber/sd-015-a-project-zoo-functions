const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecieId = employees.find((idForFirstAnimal) => idForFirstAnimal.id === id)
    .responsibleFor[0];

  const olderAnimal = species.find((infoAnimal) => infoAnimal.id === firstSpecieId)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(olderAnimal);
}

module.exports = getOldestFromFirstSpecies;
