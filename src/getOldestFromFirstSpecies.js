// const { employees, species } = data;
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeesId = data.employees.find((element) => element.id === id).responsibleFor[0];
  const speciesId = data.species.find((element) => element.id === employeesId);
  const oldestAnimal = speciesId.residents.reduce((oldest, animal) =>
    (oldest.age > animal.age ? oldest : animal));

  return Object.values(oldestAnimal);
}
console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = getOldestFromFirstSpecies;
