const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animal = employees.find((element) => element.id === id).responsibleFor[0];
  const obj = species.find((specie) => specie.id === animal).residents;
  const number = obj.map((element) => element.age).reduce((acc, value) => Math.max(acc, value));
  return obj.reduce((a, { name, age, sex }) => (age === number ? a.concat(name, sex, age) : a), []);
}

module.exports = getOldestFromFirstSpecies;
