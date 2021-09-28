const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployeeAnimal = data.employees.find((employee) => employee.id === id);
  const animalsFind = findEmployeeAnimal.responsibleFor[0];
  const filterAnimal = data.species.find((specie) => specie.id === animalsFind);
  const filterResidents = filterAnimal.residents;
  const sortResidents = filterResidents.sort((a, b) => b.age - a.age)[0];
  return [
    sortResidents.name,
    sortResidents.sex,
    sortResidents.age,
  ];
}

module.exports = getOldestFromFirstSpecies;
