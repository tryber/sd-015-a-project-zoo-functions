const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeer = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = data.species.find((animal) => animal.id === employeer).residents;
  const array = animals.sort((a, b) => b.age - a.age)[0];
  return [array.name, array.sex, array.age];
}

module.exports = getOldestFromFirstSpecies;
