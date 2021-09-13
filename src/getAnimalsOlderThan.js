const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species
    .find((element) => element.name === animal)
    .residents
    .map((element) => element.age)
    .every((elemento) => elemento > age);
}
// console.log(getAnimalsOlderThan('lions', 6));
module.exports = getAnimalsOlderThan;
