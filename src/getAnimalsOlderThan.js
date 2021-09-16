const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const objAnimal = data.species.find((value) => value.name === animal);
  return objAnimal.residents.every((value) => value.age >= age);
}

module.exports = getAnimalsOlderThan;
