const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const animalId = employees
    .find((employee) => employee.id === id).responsibleFor[0];
  const oldestAnimal = species
    .find((specie) => specie.id === animalId).residents
    .reduce((oldest, current) => (current.age > oldest.age ? current : oldest));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
