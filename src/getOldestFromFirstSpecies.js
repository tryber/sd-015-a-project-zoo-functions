const data = require('../data/zoo_data');

function olderAnimalById(id) {
  const { species } = data;
  // const age = species.find((specie) => specie.id === id).residents[0];
  const getOlderBySpecie = species.find((specie) => specie.id === id).residents
    .reduce((older, curr) => ((curr.age >= older.age) ? curr : older), { age: 0 });
  const olderAnimalOfSpecie = [];
  olderAnimalOfSpecie.push(getOlderBySpecie.name, getOlderBySpecie.sex, getOlderBySpecie.age);
  return olderAnimalOfSpecie
}
// console.log(olderAnimalById('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'))
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const { employees } = data;
  const getFirstSpecieOfEmployee = employees.find((employee) => employee.id === id).responsibleFor[0];
  return olderAnimalById(getFirstSpecieOfEmployee);
}
// console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'))
module.exports = getOldestFromFirstSpecies;
