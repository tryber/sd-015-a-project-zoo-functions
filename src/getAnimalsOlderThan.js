const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((animalName) =>
    animalName.name === animal).residents.every((ageAnimal) =>
    ageAnimal.age >= age);
}

module.exports = getAnimalsOlderThan;
