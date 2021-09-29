const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const x = employees.filter((espcies) => espcies.id === id)
    .map((element) => element.responsibleFor)[0][0];
  const y = species.find((element) => element.id === x).residents.map((older) => older.age);
  const z = y.sort((a, b) => b - a);
  const w = species.find((element) => element.id === x).residents
    .filter((older) => older.age === z[0]);
  return Object.values(w[0]);
}

getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2');
module.exports = getOldestFromFirstSpecies;
