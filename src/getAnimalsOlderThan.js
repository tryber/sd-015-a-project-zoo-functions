// const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// function getAnimalsOlderThan(animal, age) {
//   // seu código aqui
// }
const getAnimalsOlderThan = (animal, age) => species.find((unit) =>
  unit.name === animal).residents.every((unit) => unit.age >= age);

module.exports = getAnimalsOlderThan;
