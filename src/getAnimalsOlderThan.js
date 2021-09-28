const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const newTarget = species.find((target) => target.name === animal);
  const animalAgeCheck = newTarget.residents.every((animalAge) => animalAge.age >= age);
  return animalAgeCheck;
}

module.exports = getAnimalsOlderThan;

