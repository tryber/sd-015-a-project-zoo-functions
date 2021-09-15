const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find((animalObj) =>
    animalObj.name === animal)
    .residents.every((resident) => resident.age > age);
}

module.exports = getAnimalsOlderThan;
