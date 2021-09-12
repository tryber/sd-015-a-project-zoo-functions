const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const object = species.find((element) => element.name === animal);
  return object.residents.every((element) => element.age >= age);
}

console.log(getAnimalsOlderThan('lions', '1'));

module.exports = getAnimalsOlderThan;
