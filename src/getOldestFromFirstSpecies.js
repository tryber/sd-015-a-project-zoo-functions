const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpecieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstSpecie = data.species.find((specie) =>
    specie.id === firstSpecieId).residents.reduce(((oldest, resident) =>
    ((oldest.age < resident.age) ? resident : oldest)), { age: 0 });
  return Object.values(firstSpecie);
}

module.exports = getOldestFromFirstSpecies;
