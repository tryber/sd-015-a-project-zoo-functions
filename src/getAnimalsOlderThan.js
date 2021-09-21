const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((animalName) => animalName.name === animal);

  const animalAge = animals.residents.every((ages) => ages.age > age);

  return animalAge;
}

module.exports = getAnimalsOlderThan;
