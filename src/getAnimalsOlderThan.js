const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const filteredAnimal = data.species.find((object) => object.name === animal);
  return filteredAnimal.residents.every((object) => object.age >= age);
}

module.exports = getAnimalsOlderThan;
