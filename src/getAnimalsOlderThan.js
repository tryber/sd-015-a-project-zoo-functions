const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animais = species.find((element) => element.name === animal);
  const animaisResidentes = animais.residents;
  return animaisResidentes.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
