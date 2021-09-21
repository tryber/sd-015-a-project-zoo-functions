const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((elem, index) => elem.name === animal);
  return animals.residents.every((elem) => elem.age > age);
}

module.exports = getAnimalsOlderThan;
