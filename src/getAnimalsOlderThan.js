const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.filter((animal1) => (animal1.name === animal))[0]
  .residents.every((resident) => resident.age >= age);
};
// console.log(getAnimalsOlderThan('otters',7));
module.exports = getAnimalsOlderThan;
