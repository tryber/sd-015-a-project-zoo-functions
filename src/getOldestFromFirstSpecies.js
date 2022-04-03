const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animal = data.employees.find((e) => e.id === id).responsibleFor[0];
  const oldestAnimal = data.species.find((e) => e.id === animal).residents.sort((a, b) => {
    if (a.age < b.age) {
      return 1
    }
    if (a.age > b.age) {
      return -1
    }
    return 0;
  })[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
