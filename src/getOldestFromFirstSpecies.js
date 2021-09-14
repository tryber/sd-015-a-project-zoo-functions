const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

function getOldestFromFirstSpecies(id) {
  const worker = employees.find((employee) => employee.id === id);
  const animal = getSpeciesByIds(worker.responsibleFor[0]);
  return Object.values(animal[0].residents.sort((a, b) => b.age - a.age)[0]);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
