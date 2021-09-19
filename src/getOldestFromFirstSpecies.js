const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(idInput) {
  const employeeData = employees.find(({ id }) => id === idInput);
  const { responsibleFor } = employeeData;
  const foundAnimal = species.find(({ id }) => id === responsibleFor[0]);
  const oldestAnimal = foundAnimal.residents.reduce((biggest, number) => {
    if (biggest.age > number.age) {
      return biggest;
    }
    return number;
  }, 0);
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
