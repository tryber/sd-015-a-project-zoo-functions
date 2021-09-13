const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimal = data.species.filter((element) => element.name === animal);
  return getAnimal[0].residents.every((element) => element.age > age);
}

module.exports = getAnimalsOlderThan;
