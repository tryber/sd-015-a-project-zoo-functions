const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const foundedEmployee = employees.find((employee) => employee.id === id);
  const firstSpecie = foundedEmployee.responsibleFor.find((animalId) => animalId);
  const animalObj = species.find((animal) => animal.id === firstSpecie);
  const olderAnimal = animalObj.residents.sort((a, b) => b.age - a.age);
  return Object.values(olderAnimal[0]);
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
