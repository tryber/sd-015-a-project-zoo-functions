const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animalName) => animalName.name === animal)
    .residents.every((idade) => idade.age > age);
}

module.exports = getAnimalsOlderThan;
