const data = require('../data/zoo_data');

// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce - monitoria sabado luiz sobre nome reduce

function getOldestFromFirstSpecies(id) {
  const responsibleEmployee = data.employees.find((employee) => employee.id === id).responsibleFor;
  const animal = data.species.find((specie) => specie.id === responsibleEmployee[0]).residents;
  return Object.values(animal.reduce((previousValue, currentValue) =>
  ((previousValue.age < currentValue.age) ? currentValue : previousValue)));
}

module.exports = getOldestFromFirstSpecies;
