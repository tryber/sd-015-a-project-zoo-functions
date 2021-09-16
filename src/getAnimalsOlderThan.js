const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimal = data.species.find((element) => element.name === animal);
  return getAnimal.residents.every((element) => element.age > age);
}

module.exports = getAnimalsOlderThan;
