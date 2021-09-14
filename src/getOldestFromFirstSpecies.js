const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specificEmployee = data.employees.find((employee) => employee.id === id);
  const firstSpecie = specificEmployee.responsibleFor[0];
  const specie = data.species.find((eachSpecie) => eachSpecie.id === firstSpecie);
  const sortedResidents = specie.residents.sort((resident, resident2) =>
    resident2.age - resident.age);
  return [sortedResidents[0].name, sortedResidents[0].sex, sortedResidents[0].age];
}

module.exports = getOldestFromFirstSpecies;
