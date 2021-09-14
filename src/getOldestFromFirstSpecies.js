const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const primeiroAnimal = data.employees.find((employe) => employe.id === id).responsibleFor[0];
  const animalVelho = data.species.find((velhote) => velhote.id === primeiroAnimal)
  .residents.reduce((acc, curr) => (curr.age > acc.age ? curr : acc))
  return [animalVelho.name, animalVelho.sex, animalVelho.age];
}

module.exports = getOldestFromFirstSpecies;
