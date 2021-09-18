const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalID = data.employees
    .find((element) => element.id === id)
    .responsibleFor.find((element) => element[0]);
  const animalAge = data.species.find((element) =>
    element.id === animalID)
    .residents.reduce((acc, element) =>
      (element.age > acc.age ? element : acc));
  return [animalAge.name, animalAge.sex, animalAge.age];
}

module.exports = getOldestFromFirstSpecies;
