const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((i) => i.name === animal);
  return specie.residents.every((i) => i.age > age);
}

module.exports = getAnimalsOlderThan;
