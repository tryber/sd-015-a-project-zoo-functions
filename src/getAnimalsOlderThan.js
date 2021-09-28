const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animais = data.species.find((element) => element.name === animal);
  return animais.residents.every((element2) => element2.age > age);
}

module.exports = getAnimalsOlderThan;
