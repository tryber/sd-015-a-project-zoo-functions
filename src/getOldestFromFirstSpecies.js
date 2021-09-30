const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;
function getOldestFromFirstSpecies(id) {
  const firstSpecieID = employees.find((employes) => employes.id === id).responsibleFor[0];
  const firstResidents = species.find((specie) => specie.id === firstSpecieID).residents;
  const oldestResident = firstResidents
    .reduce((acc, resident) => ((acc > resident.age) ? acc : resident.age), 0);
  const oldestOne = firstResidents.find((resident) => resident.age === oldestResident);
  return Object.values(oldestOne);
}

module.exports = getOldestFromFirstSpecies;
