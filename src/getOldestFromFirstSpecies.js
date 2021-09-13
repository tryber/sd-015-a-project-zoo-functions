const {
  employees,
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsible = employees.find((el) => el.id === id).responsibleFor;
  const animalId = responsible[0];

  const animalObject = species.find((elem) => elem.id === animalId);
  const OldestAnimal = animalObject.residents.sort((a, b) => b.age - a.age);

  const OldestAnimalInfo = OldestAnimal[0];
  return Object.values(OldestAnimalInfo);
}

module.exports = getOldestFromFirstSpecies;
