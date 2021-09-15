const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalResult = data.species.find((elem, index) => elem.name === animal);
  return animalResult.residents.every((elem) => elem.age > age);
}

module.exports = getAnimalsOlderThan;
