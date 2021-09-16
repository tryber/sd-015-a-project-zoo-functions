const {
  employees,
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // Finds animals the employee is responsible for
  const responsible = employees.find((el) => el.id === id).responsibleFor[0];
  // Stores the first animal's id which the employee is responsible for
  // Returns the object of said animal
  const animalObject = species.find((elem) => elem.id === responsible);
  // Sorts the object in decrescent order by age
  const OldestAnimal = animalObject.residents.sort((a, b) => b.age - a.age);
  // returns the values of the object in an array
  return Object.values(OldestAnimal[0]);
}

module.exports = getOldestFromFirstSpecies;
