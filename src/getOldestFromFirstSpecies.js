const data = require('../data/zoo_data');

const [...species] = data.species;
const [...employees] = data.employees;

function getOldestFromFirstSpecies(id) {
  const { responsibleFor } = employees.find((employee) => employee.id === id);
  const { residents } = species.find((specie) => specie.id === responsibleFor[0]);
  const oldestAge = residents.reduce((acc, resi) => (resi.age > acc ? resi.age : acc), 0);
  const oldestResident = residents.find((resident) => resident.age === oldestAge);
  return [oldestResident.name, oldestResident.sex, oldestAge];
}
module.exports = getOldestFromFirstSpecies;
