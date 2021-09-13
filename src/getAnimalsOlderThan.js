const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimal = data.species.find((element) => element.name === animal);
  const result = getAnimal.residents.every((element) => element.age >= age);
  return result
}

module.exports = getAnimalsOlderThan;
