const data = require('../data/zoo_data');

const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstAnimalCare = species.find((specie) => specie.id === funcionario).residents;
  const elderAnimal = firstAnimalCare.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(elderAnimal);
}

module.exports = getOldestFromFirstSpecies;
