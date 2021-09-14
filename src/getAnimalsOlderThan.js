const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especie = data.species.filter((element) => element.name === animal);
  return especie[0].residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
