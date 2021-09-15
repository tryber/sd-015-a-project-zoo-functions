const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((element) => element.name === animal)
    .residents
    .every((elemento) => elemento.age > age);
}
console.log(getAnimalsOlderThan('lions', 7));
module.exports = getAnimalsOlderThan;
