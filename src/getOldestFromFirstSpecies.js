// const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((unit) => unit.id === id);
  const animal = species.find((unit) =>
    unit.id === employee.responsibleFor[0]).residents;
  // https://qastack.com.br/programming/11301438/return-index-of-greatest-value-in-an-array
  const oldest = animal.reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr), 0);
  return [oldest.name, oldest.sex, oldest.age];
}

module.exports = getOldestFromFirstSpecies;
