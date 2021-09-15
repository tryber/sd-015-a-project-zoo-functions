const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {

  const animalEmployee = data.employees
    .find((person) => person.id === id).responsibleFor[0];

  const firstSpecieResidents = data.species
    .find((animals) => animals.id === animalEmployee).residents;

  const residentsSort = firstSpecieResidents
    .sort((young, old) => old.age - young.age);

  const oldAnimal = Object.values(residentsSort[0]);

  return oldAnimal;
}
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
