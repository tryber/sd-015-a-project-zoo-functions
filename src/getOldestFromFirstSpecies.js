const {
  employees,
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // Finds animals the employee is responsible for
  const responsible = employees.find((el) => el.id === id).responsibleFor;
  // Stores the first animal's id which the employee is responsible for
  const animalId = responsible[0];

  // Returns the object of said animal
  const animalObject = species.find((elem) => elem.id === animalId);
  // Sorts the object in decrescent order by age
  const OldestAnimal = animalObject.residents.sort((a, b) => b.age - a.age);

  // Picks the first animal, the oldest one
  const OldestAnimalInfo = OldestAnimal[0];
  // returns the values of the object in an array
  return Object.values(OldestAnimalInfo);
}

module.exports = getOldestFromFirstSpecies;
