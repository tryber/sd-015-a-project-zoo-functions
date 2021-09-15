const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idA = employees.find((e) => e.id === id).responsibleFor[0];
  return species.find((e) => e.id === idA).residents.reduce((o, a) =>
    ((o[2] > a.age) ? o : [a.name, a.sex, a.age]), [0, 0, 0]);
}

module.exports = getOldestFromFirstSpecies;
