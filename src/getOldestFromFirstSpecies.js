const data = require('../data/zoo_data');

function olderAnimalById(id) {
  const { species } = data;
  const getOlderBySpecie = species.find((specie) => specie.id === id).residents
    .reduce((older, curr) => ((curr.age >= older.age) ? curr : older), { age: 0 });
  const olderAnimalOfSpecie = [];
  olderAnimalOfSpecie.push(getOlderBySpecie.name, getOlderBySpecie.sex, getOlderBySpecie.age);
  return olderAnimalOfSpecie;
}

function getOldestFromFirstSpecies(id) {
  const { employees } = data;
  const getFirstSpecieOfEmployee = employees.find((employee) => employee.id === id)
    .responsibleFor[0];
  return olderAnimalById(getFirstSpecieOfEmployee);
}

module.exports = getOldestFromFirstSpecies;
