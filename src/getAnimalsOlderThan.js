const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animais = data.species.find((elemento) => elemento.name === animal);
  return animais.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
