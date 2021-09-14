const data = require('../data/zoo_data');

function getSpecies() {
  return data.species;
}

function getEmployess() {
  return data.employees;
}

function findById(arrayOfElements, id) {
  return arrayOfElements.find((element) => element.id === id);
}

function getOldestFromFirstSpecies(id) {
  const employee = findById(getEmployess(), id);
  const firstAnimalId = employee.responsibleFor[0];
  const animal = findById(getSpecies(), firstAnimalId);
  const { residents } = animal;
  const { name, sex, age } = residents.reduce((older, resident) => (
    (older.age > resident.age) ? older : resident
  ), 0);
  return [name, sex, age];
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
