const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const worker = data.employees.find((x) => x.id === id).responsibleFor[0];
  const animals = data.species.find((x) => x.id === worker).residents;
  const older = animals.reduce((x, y) => ((x.age > y.age ? x : y)));
  return Object.values(older);
}

module.exports = getOldestFromFirstSpecies;
