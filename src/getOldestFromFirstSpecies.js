const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const worker = employees.find((who) => who.id === id);
  const animals = species.find((creat) => creat.id === worker.responsibleFor[0]).residents;
  const animalData = animals.reduce((older, now) => ((now.age > older.age) ? now : older));

  return [animalData.name, animalData.sex, animalData.age];
}

module.exports = getOldestFromFirstSpecies;
