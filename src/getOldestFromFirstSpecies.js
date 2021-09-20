const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const employee1 = employees.find((employee) => employee.id === id).responsibleFor;
  const getAnimalResposable = species.find((specie) => specie.id === employee1[0]).residents;
  const getOlderAnimal = getAnimalResposable.reduce((acc, current) =>
    ((acc.age > current.age) ? acc : current));
  return Object.values(getOlderAnimal);
}

module.exports = getOldestFromFirstSpecies;
