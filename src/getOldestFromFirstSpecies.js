const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animalArray = data.species.find((specie) => specie.id === animalId).residents;
  const sortedAnimalArray = animalArray.sort((a, b) => b.age - a.age);
  const { age, name, sex } = sortedAnimalArray[0];
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
