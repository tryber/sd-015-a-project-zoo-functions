const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const func = employees.find((employee) => id.includes(employee.id));
  const animal = species.find((specie) =>
    specie.id === func.responsibleFor[0]).residents.reduce((acc, curr) =>
    (acc.age > curr.age ? acc : curr));
  return [animal.name, animal.sex, animal.age];
}

module.exports = getOldestFromFirstSpecies;

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
