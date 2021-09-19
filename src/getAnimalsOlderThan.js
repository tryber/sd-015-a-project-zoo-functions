const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimal = data.species.find((findAnimal) => findAnimal.name === animal);
  return getAnimal.residents.every((animalAge) => animalAge.age >= age);
}

module.exports = getAnimalsOlderThan;