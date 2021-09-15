const { employees, species } = require('../data/zoo_data');

const sortByOlder = (residents) => residents.sort((a, b) => b.age - a.age);

const findAnimalById = (id) => species.find(({ id: animalId }) => animalId === id);

const findEmployeeById = (id) => employees.find(({id: employeeId}) => employeeId === id);

const getOldestFromFirstSpecies = (id) => {
  const animal = findAnimalById(findEmployeeById(id).responsibleFor[0]);
  const residents = sortByOlder(animal.residents);

  const olderResidentArr = Object.values(residents[0]);

  return olderResidentArr;
};

module.exports = getOldestFromFirstSpecies;
