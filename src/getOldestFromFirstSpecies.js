const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getEmployeeId = data.employees.find((employee) => employee.id === id);
  const getFirstRespAnimal = getEmployeeId.responsibleFor[0];
  const getResidents = (data.species.find((specie) => specie.id === getFirstRespAnimal)).residents;
  const getOlderAnimal = getResidents.reduce((older, animals) =>
    older.age > animals.age ? older : animals, 0);
  return Object.values(getOlderAnimal);
}

module.exports = getOldestFromFirstSpecies;
