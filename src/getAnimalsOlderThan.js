const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.species.find((element) => element.name === animal);
  return animals.residents.every((Animel) => Animel.age > age);
}

module.exports = getAnimalsOlderThan;
