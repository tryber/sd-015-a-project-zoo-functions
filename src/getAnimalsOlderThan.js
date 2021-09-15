const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalP = species.find((element) => element.name === animal).residents;
  const idadeA = animalP.every((param) => param.age > age);
  return idadeA;
}

module.exports = getAnimalsOlderThan;
