const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find((creature) => creature.name === animal);
  const checkAge = findAnimal.residents.every((each) => each.age >= age);
  return checkAge;
}

module.exports = getAnimalsOlderThan;
