const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((value) => value.id === id).responsibleFor[0];
  const animalData = data.species.find((value) => value.id === animalId).residents;
  const oldestAnimal = animalData.reduce((acc, cv) =>
    ((acc.age > cv.age) ? acc : cv));

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
