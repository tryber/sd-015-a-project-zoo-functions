const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAnimal = data.employees.find((i) => i.id === id).responsibleFor[0];
  const allAnimals = data.species.find((i) => i.id === firstAnimal).residents;
  const olderAnimal = allAnimals.reduce((bigger, cur) => ((bigger.age > cur.age) ? bigger : cur));
  return Object.values(olderAnimal);
}

module.exports = getOldestFromFirstSpecies;
