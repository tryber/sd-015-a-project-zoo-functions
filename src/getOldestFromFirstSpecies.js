const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((AllEmployees) => id === AllEmployees.id);
  const firstAnimal = findEmployee.responsibleFor[0];
  const oldestAnimal = species.find((animal) => animal.id === firstAnimal)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(oldestAnimal);
}

// function getOldestFromFirstSpecies(id) {
//   const emplyee = data.employees.find((employeeFinder) => employeeFinder.id === id);
//   const resident = data.species.find((spFind) => emplyee.responsibleFor[0] === spFind.id);
//   const sortOlder = resident.residents.sort((a, b) => b.age - a.age)[0];

// }

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
